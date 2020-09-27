from rest_framework import serializers
from products.models import Products, Images

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ('id', 'image', 'banner', 'featured')

class ProductsSerializer(serializers.ModelSerializer):
    
    product_images = ImagesSerializer(many=True)
    
    class Meta:
        model = Products
        fields = ('id', 'product_name', 'product_description', 'price', 'discounted_price', 'product_images')

    def create(self, validated_data):

        imgsData = validated_data.pop('product_images')

        prodData = {
            "product_name" : validated_data["product_name"],
            "product_description" : validated_data["product_description"],
            "price" : validated_data["price"],
            "discounted_price" : validated_data["discounted_price"]
        }

        prodObj = Products.objects.create(**prodData)
        for imgData in imgsData:
            Images.objects.create(product=prodObj, **imgData)

        return prodObj

    def update(self, instance, validated_data):

        imgsData = validated_data.pop('product_images')

        product_images = (instance.product_images).all()
        product_images = list(product_images)

        instance.product_name = validated_data["product_name"]
        instance.product_description = validated_data["product_description"]
        instance.price = validated_data["price"]
        instance.discounted_price = validated_data["discounted_price"]
        
        instance.save()

        Images.objects.filter(product=instance).delete()

        for imgData in imgsData:
            Images.objects.create(product=instance, **imgData)

        # Login - 1 [ Internet Logic - Useful In Future - Don't Delete ]

        # for imgData in imgsData:
        #     product_image = product_images.pop(0)
        #     product_image.image = imgData.get('image', product_image.image)
        #     product_image.banner = imgData.get('banner', product_image.banner)
        #     product_image.featured = imgData.get('featured', product_image.featured)
        #     product_image.save()

        return instance
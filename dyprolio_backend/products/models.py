from django.db import models

# Create your models here.
class Products(models.Model):
    product_name = models.CharField(max_length=50, blank=False)
    product_description = models.TextField(blank=True)
    price = models.IntegerField()
    discounted_price = models.IntegerField()

class Images(models.Model):
    product = models.ForeignKey(Products, related_name='product_images', on_delete=models.CASCADE)
    image = models.TextField(blank=True)
    banner = models.BooleanField(blank=False, default=False)
    featured = models.BooleanField(blank=False, default=False)
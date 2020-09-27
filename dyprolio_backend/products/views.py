# from django.shortcuts import render

# Create your views here.
from products.models import Products
from products.serializers import ProductsSerializer, ImagesSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

import jwt
from datetime import datetime
import os
import json
with open(os.path.join(os.path.dirname(os.path.realpath(__file__)), '..', 'config', 'jwt_config.json')) as jwt_config_file:
    jwt_config = json.load(jwt_config_file)


class ProductsView(APIView):
    def get(self, request, format=None):
        products = Products.objects.all().order_by('-id')
        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data)


    def post(self, request, format=None):


        try:
            token = request.headers.get('Authorization')
            if(not(token)):
                return Response({"error_id" : "", "error_detail" : "Token Not Found"}, status=401)
            
            dec_token = jwt.decode(token, jwt_config["secret"], algorithm=jwt_config["algorithm"])
        except Exception as e:
            return Response({"error_id" : "", "error_detail" : str(e)}, status=401)

        if(not(dec_token)):
            return Response({"error_id" : "", "error_detail" : "You are not authorized to add products"}, status=401)


        try:
            data = request.data
        except Exception as e:
            print(e)
            return Response({"error_id" : "", "error_detail" : "Data(Body) Not Found"}, status=400)
        
        prodSerializer = ProductsSerializer(data=data)
        if prodSerializer.is_valid():
            prodSerializer.save()
            return Response(prodSerializer.data, status=201)
        else:
            return Response(prodSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetail(APIView):

    def get_object(self, pk):
        try:
            return Products.objects.get(pk=pk)
        except Products.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        
        try:
            token = request.headers.get('Authorization')
            if(not(token)):
                return Response({"error_id" : "", "error_detail" : "Token Not Found"}, status=401)
            
            dec_token = jwt.decode(token, jwt_config["secret"], algorithm=jwt_config["algorithm"])
        except Exception as e:
            return Response({"error_id" : "", "error_detail" : str(e)}, status=401)

        if(not(dec_token)):
            return Response({"error_id" : "", "error_detail" : "You are not authorized to add products"}, status=401)

        try:
            data = request.data
        except Exception as e:
            print(e)
            return Response({"error_id" : "", "error_detail" : "Data(Body) Not Found"}, status=status.HTTP_400_BAD_REQUEST)

        product = self.get_object(pk)
        prodSerializer = ProductsSerializer(product, data=data)
        if prodSerializer.is_valid():
            prodSerializer.save()
            return Response(prodSerializer.data, status=201)
        else:
            return Response(prodSerializer.errors, status=status.HTTP_400_BAD_REQUEST)



# class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Products.objects.all()
#     serializer_class = ProductsSerializer
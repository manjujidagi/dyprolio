from django.shortcuts import render

# Create your views here.
from secure.models import Secure
from secure.serializers import SecureSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import jwt
from datetime import datetime
import os
import json
with open(os.path.join(os.path.dirname(os.path.realpath(__file__)), '..', 'config', 'jwt_config.json')) as jwt_config_file:
    jwt_config = json.load(jwt_config_file)


class SecureAddUserView(APIView):

    def post(self, request, format=None):
        token = request.headers.get('Authorization')

        if token != '87bc32c912837yd3927dqnwd129387':
            return Response({"error_id" : "", "error_detail" : "You are not authorized to create user"}, status=401)

        try:
            data = request.data
        except Exception as e:
            print(e)
            return Response({"error_id" : "", "error_detail" : "Data(Body) Not Found"}, status=status.HTTP_400_BAD_REQUEST)


        if(("username" not in data) or ("password" not in data) or ("confirm_password" not in data)):
            return JsonResponse({"error_id" : "", "error_detail" : "Required Fields Missing"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            secure = Secure.objects.get(username=data['username'])
            serializer = SecureSerializer(secure)
            return Response({"error_id" : "", "error_detail" : "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        except Secure.DoesNotExist:
            pass

        if(data["password"] != data["confirm_password"]):
            return Response({"error_id" : "", "error_detail" : "Passwords didn't match"}, status=status.HTTP_400_BAD_REQUEST)

        new_data = {}
        new_data["username"] = data["username"]
        new_data["password"] = data["password"]

        serializer = SecureSerializer(data=new_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SecureLoginView(APIView):

    def post(self, request, format=None):

        try:
            data = request.data
        except Exception as e:
            print(e)
            return Response({"error_id" : "", "error_detail" : "Data(Body) Not Found"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            secure = Secure.objects.get(username=data['username'], password=data['password'])
            serializer = SecureSerializer(secure)
        except Secure.DoesNotExist:
            return Response({"error_id" : "", "error_detail" : "Username or Password Mismatch"}, status=401)


        token_payload = dict(serializer.data)
        token_payload["created"] = str(datetime.now())

        # Return Token
        ret_json_data = {
            "token" : (jwt.encode(token_payload, jwt_config["secret"], algorithm=jwt_config["algorithm"])).decode('ascii')
        }

        return Response(ret_json_data, status=200)

class SecurePasswordChangeView(APIView):

    def post(self, request, format=None):

        try:
            token = request.headers.get('Authorization')
            dec_token = jwt.decode(token, jwt_config["secret"], algorithm=jwt_config["algorithm"])
        except Exception as e:
            return Response({"error_id" : "", "error_detail" : str(e)}, status=400)

        if(not(dec_token)):
            return Response({"error_id" : "", "error_detail" : "You are not authorized to change password"}, status=401)

        try:
            data = request.data
        except Exception as e:
            print(e)
            return Response({"error_id" : "", "error_detail" : "Data(Body) Not Found"}, status=status.HTTP_400_BAD_REQUEST)
        
        if(("old_password" not in data) or ("new_password" not in data) or ("confirm_password" not in data)):
            return Response({"error_id" : "", "error_detail" : "Required Fields Missing"}, status=400)

        try:
            secure = Secure.objects.get(username=dec_token['username'], password=data['old_password'])
            serializer = SecureSerializer(secure)
        except Secure.DoesNotExist:
            return Response({"error_id" : "", "error_detail" : "Old Password didn't match"}, status=400)

        # Change the password here
        new_data = {
            "password" : data["new_password"]
        }
        serializer = SecureSerializer(secure, data=new_data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
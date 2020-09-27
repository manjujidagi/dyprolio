from rest_framework import serializers
from . import models

class SecureSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Secure
        fields = ('id', 'username', 'password')
        extra_kwargs = {
            'password' : {'write_only' : True}
        }
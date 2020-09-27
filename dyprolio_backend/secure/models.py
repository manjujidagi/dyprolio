from django.db import models

# Create your models here.
class Secure(models.Model):
    username = models.CharField(max_length=50, blank=False, unique=True)
    password = models.CharField(max_length=50, blank=False)
from django.db import models
from cloudinary.models import CloudinaryField

class Products(models.Model):
    name = models.CharField(max_length=40)
    image = CloudinaryField('image')
    price = models.IntegerField()
    rating = models.IntegerField()
    message = models.CharField(max_length=40,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ProductCart(models.Model):
    product = models.ForeignKey(Products,on_delete=models.CASCADE)
    count = models.IntegerField()
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
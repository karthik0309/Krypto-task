from django.db import models
from users.models import User
from products.models import Products

class Favourites(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    products = models.ManyToManyField(Products)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


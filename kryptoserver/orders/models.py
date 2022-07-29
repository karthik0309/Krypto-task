from django.db import models
from users.models import User
from products.models import ProductCart

class Orders(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    products = models.ManyToManyField(ProductCart)
    total = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


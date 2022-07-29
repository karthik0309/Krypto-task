from .models import Products,ProductCart
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class ProductCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCart
        fields = '__all__'
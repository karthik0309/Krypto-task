from django.shortcuts import render
from .serializers import ProductSerializer
from .models import Products
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class ProductViewset(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    http_method_names = ['post','get']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Products.objects
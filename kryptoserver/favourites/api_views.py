from django.shortcuts import render
from .serializers import FavouriteSerializer
from .models import Favourites
from users.models import User
from products.models import Products
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class FavouriteViewset(viewsets.ModelViewSet):
    serializer_class = FavouriteSerializer
    http_method_names = ['post','get']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        get_data = self.request.query_params
        return Favourites.objects.filter(user=get_data['user'])
    
    def create(self, request, *args, **kwargs):
        data = request.data

        user = User.objects.get(username=data['username'])
        products = Products.objects.get(name=data['name'])

        new_favourite = Favourites.objects.create(user=user)
        new_favourite.save()

        new_favourite.products.add(products)
        serializer = FavouriteSerializer(new_favourite)

        return Response(serializer.data)


from django.shortcuts import render
from .serializers import OrderSerializer
from .models import Orders
from products.models import Products,ProductCart
from users.models import User
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class OrderViewset(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    http_method_names = ['post','get']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        get_data = self.request.query_params
        return Orders.objects.filter(user=get_data['user'])
    
    def create(self, request, *args, **kwargs):
        data = request.data

        print(data)
        user = User.objects.get(username=data['username'])
        new_order = Orders.objects.create(user=user, total=data["total"])

        new_order.save()

        for product in data["products"]:
            product_obj = Products.objects.get(id=product["id"])
            product_cart = ProductCart.objects.create(product=product_obj,
                                                    count=product["count"],
                                                    price=product["price"])
            new_order.products.add(product_cart)
        
        serializer = OrderSerializer(new_order)

        return Response(serializer.data)
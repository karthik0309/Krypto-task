from .models import Favourites
from rest_framework import serializers

class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourites
        fields = '__all__'
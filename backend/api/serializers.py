from rest_framework import serializers
from .models import Product, Pest


class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'manufacturer', 'name', 'description', 'group',  'info','risk']

class PestSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pest
    fields = ['id', 'name', 'farmer', 'prod_id', 'volume', 'dose', 'description']
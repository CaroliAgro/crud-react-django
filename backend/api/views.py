from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from .models import Product, Pest
from .serializers import ProductSerializer, PestSerializer
from django.contrib.auth.models import User
from json import loads, dumps
from rest_framework import permissions, authentication
from rest_framework.exceptions import PermissionDenied

class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  permission_classes = [permissions.IsAuthenticated]
  authentication_classes = [authentication.TokenAuthentication]

  

  @action(detail=True, methods=['POST'])
  def check_product(self, request, pk=None):
    if "name" in request.data:
      product = Product.objects.get(id=pk) # http://localhost:8000/api/products/1/check_product/
      name = request.data['name']
      user = request.user
      print(user)
      #user = User.objects.get(id=1)
      print('user', user)
      print('product name', product.name)
      
      try:
        pests = Pest.objects.get(farmer=user.id, prod_id=product.id) # mais de um pest com mesmo use e product id colocar id
        pests.name = name
        pests.save()
        serializer = PestSerializer(pests, many=False)
        response = {'message': "Product updated", 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)
      except: 
        pests = Pest.objects.create(farmer=user, prod_id=product, name=name, volume=500, dose=10, description="ola")
        serializer = PestSerializer(pests, many=False)
        response = {'message': "Product created", 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)
    else:
      response = {'message': "Favor passar o nome"}
      return Response(response, status=status.HTTP_400_OK)
  
  @action(detail=True, methods=['POST'])
  def check_risk(self, request, pk=None):
    if "risk" in request.data:
      product = Product.objects.get(id=pk) # http://localhost:8000/api/products/1/check_product/
      risk = request.data['risk']
      user = request.user
      
      try:
        product = Product.objects.get(id=pk) # mais de um pest com mesmo use e product id colocar id
        product.risk = risk
        product.save()
        serializer = ProductSerializer(product, many=False)
        response = {'message': "Product updated", 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)
      except: 
        pests = Product.objects.create(manufacturer="Singenta", name="Pyrinex", description="Produto Organofosforado", group="ORG", risk=risk)
        serializer = ProductSerializer(pests, many=False)
        response = {'message': "Product created", 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)

      
    else:
      response = {'message': "Favor passar o risk"}
      return Response(response, status=status.HTTP_400_OK)

    

class PestViewSet(viewsets.ModelViewSet):
  queryset = Pest.objects.all()
  serializer_class = PestSerializer
  permission_classes = [permissions.IsAuthenticated]
  authentication_classes = [authentication.TokenAuthentication]

  def destroy(self, request, *args, **kwargs):
    pest = Pest.objects.get(pk=self.kwargs["pk"])
    if not request.user == pest.farmer:
      raise PermissionDenied("You can not delete this poll.")
    return super().destroy(request, *args, **kwargs)

  def list(self, request, *args, **kwargs):
    queryset = self.filter_queryset(self.get_queryset())
    page = self.paginate_queryset(queryset)
    if page is not None:
        serializer = self.get_serializer(page, many=True)
        return self.get_paginated_response(serializer.data)

    serializer = self.get_serializer(queryset, many=True)
    a = loads(dumps(serializer.data))
    

    return Response(serializer.data)
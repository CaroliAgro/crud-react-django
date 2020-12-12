from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models import Sum, Max, Count


class Product(models.Model):
  manufacturer = models.CharField(max_length=50, default=False)
  name = models.CharField(max_length=50)
  description = models.TextField(max_length=300)
  group = models.CharField(max_length=50)
  risk = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)], default=0)
  
  
  def info(self):
    return Pest.objects.filter(prod_id=self).aggregate(volume_total=Sum('volume'), volume_max=Max('volume'), total_pest=Count('id'))
    

class Pest(models.Model):
  name = models.CharField(max_length=30)
  farmer = models.ForeignKey(User, on_delete=models.CASCADE)
  prod_id = models.ForeignKey(Product, related_name='pests', on_delete=models.CASCADE)
  volume = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(500)])
  dose = models.IntegerField(default=False)
  description = models.TextField(max_length=300, default=False)
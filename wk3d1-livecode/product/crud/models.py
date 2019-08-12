from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class ProductModel(models.Model):
    name = models.CharField(max_length=140)
    brand = models.CharField(max_length=140)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    description = models.CharField(max_length=280)
    ethic_rating = models.IntegerField(validators=[MaxValueValidator(10), MinValueValidator(0)])

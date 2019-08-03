from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Event(models.Model):
    title = models.TextField()
    description = models.TextField()
    location = models.TextField()
    date = models.TextField()
    attenders = models.IntegerField(default=0)

class CustomUser(AbstractUser):
    pass 

    def __str__(self):
        return self.email
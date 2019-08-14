from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser, User

# Create your models here.
class Event(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='creator')
    title = models.TextField()
    description = models.TextField()
    location = models.TextField()
    date = models.TextField()
    time = models.TextField()
    attendees = models.ManyToManyField(User, related_name='attendees')

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

# class Profile(models.Model):
#     user=models.OnetoOneField(User, on_delete=models.CASCADE)
#     name=models.TextField(max_length=50)
#     email=model.EmailField(max_length=254)
   
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()

#class CustomUser(AbstractUser):
#    pass 

#    def __str__(self):
#        return self.email
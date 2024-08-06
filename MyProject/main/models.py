from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField



class CustomUser(AbstractUser):
    phone_number = PhoneNumberField('Phone number',null=True)
    purchases = models.FloatField('purchases made by the user',null=True,default=0)
    store = models.CharField('Most used stores',max_length=255,null=True)
    image = models.ImageField('User Image',upload_to='media/users',null=True)


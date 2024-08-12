from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField



class CustomUser(AbstractUser):
    phone_number = PhoneNumberField('Phone number',null=True)
    purchases = models.FloatField('purchases made by the user',blank=True,default=0)
    store = models.CharField('Most used stores',max_length=255,blank=True)
    image = models.ImageField('User Image',upload_to='media/users',blank=True)




class Company(models.Model):
    name = models.CharField('Company name',max_length=300)
    rate = models.IntegerField('Rating',default=0)
    email = models.EmailField('Email')
    phone_number = PhoneNumberField('Phonenumber')
    address = models.CharField('Address',max_length=500)



    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
    

class Category(models.Model):
    name = models.CharField('Category name',max_length=255)


    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class SubCategory(models.Model):
    name = models.ForeignKey(Category,on_delete=models.CASCADE,related_name='subcategory')

    
    def __str__(self) -> str:
        return f'{self.name}'

    class Meta:
        verbose_name = 'Subcategory'
        verbose_name_plural = 'Subcategories'

class MainProduct(models.Model):
    name = models.CharField('Product name',max_length=255)
    price_old = models.FloatField('Old Price')
    discount = models.IntegerField('Discount',default=0)
    img = models.ImageField('Image',upload_to='media/products')
    company = models.ForeignKey(Company,on_delete=models.CASCADE,related_name='companyy')
    data = models.DateField('Data',auto_now_add=True)
    image_2 = models.ImageField('Second image',upload_to='media/products')
    category = models.ForeignKey(SubCategory,on_delete=models.CASCADE,related_name='categoryy')


    def __str__(self) -> str:
        return self.name
    

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

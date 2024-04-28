from django.db import models

# Create your models here.
class Login(models.Model):
    email=models.EmailField()
    password=models.CharField(max_length=8)

    def __str__(self):
        return self.email

class Contact(models.Model):
    name=models.CharField(max_length=100)
    phone=models.BigIntegerField()
    email=models.EmailField(max_length=100)
    des=models.TextField()
    # date=models.DateField()

    def __str__(self):
        return self.name

# class Register(models.Model):
#     username=models.CharField(max_length=10)
#     password = models.IntegerField()
    
#     def __str__(self):
#         return self.username
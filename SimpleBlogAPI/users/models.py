from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class Users(models.Model):
    id = models.BigAutoField(db_column='BID', primary_key=True)
    email = models.EmailField()
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=300)

    def __str__(self):
        return f"{self.id ,self.name, self.email, self.password}"

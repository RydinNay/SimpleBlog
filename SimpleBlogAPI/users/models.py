from django.db import models
from datetime import datetime


# Create your models here.
class Users(models.Model):
    user_id = models.BigAutoField(db_column='BID', primary_key=True)
    email = models.EmailField()
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=300)

    def __str__(self):
        return f"{self.user_id ,self.name, self.email, self.password}"


class Session(models.Model):
    sessionId = models.BigAutoField(db_column='BID', primary_key=True)
    userId = models.ForeignKey(Users, )
    jwtToken = models.CharField()
    timestamp = models.DateTimeField(default=datetime.now())
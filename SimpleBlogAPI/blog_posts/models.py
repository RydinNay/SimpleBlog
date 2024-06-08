from django.db import models
from datetime import datetime

from users.models import Users


class Posts(models.Model):
    postId = models.BigAutoField(db_column='BID', primary_key=True)
    topic = models.CharField(max_length=40, default=None)
    postText = models.TextField(max_length=1600, default=None)
    author = models.ForeignKey(Users, on_delete=models.CASCADE, default=None)
    timestamp = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return f"{self.topic, self.postText, self.author, self.timestamp}"

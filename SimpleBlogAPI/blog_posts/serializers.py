from rest_framework import serializers
from .models import Posts
from users.serializers import UserSerializer


class PostsSerializer(serializers.ModelSerializer):

    author = UserSerializer

    class Meta:
        model = Posts
        fields = '__all__'

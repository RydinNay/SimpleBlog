from rest_framework import serializers
from .models import Users
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['user_id', 'email', 'name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Users(
            email=validated_data['email'],
            name=validated_data['name']
        )
        user.password = make_password(validated_data['password'])
        user.save()
        return user

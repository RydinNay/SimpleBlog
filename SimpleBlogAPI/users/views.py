import json
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password, check_password

from .models import Users
from .serializers import UserSerializer


class UsersCRUD(APIView):
    def get(self, request):
        try:
            email = request.query_params['email']
            pasword = request.query_params['pass']
            user = Users.objects.filter(email=email)

            if check_password(pasword, user[0].password):
                serializer = UserSerializer(user[0])
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                print(False)
                return Response(status==status.HTTP_400_BAD_REQUEST)
        except():
            return Response(status==status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        user = UserSerializer(data=request.data)
        print(user)
        if user.is_valid():
            user.save()
            return Response(user.data, status=status.HTTP_201_CREATED)
        else:
            return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)

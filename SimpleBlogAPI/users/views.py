from rest_framework.permissions import AllowAny

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password

from .models import Users
from .serializers import UserSerializer


class UsersLogin(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            #email = request.query_params['email']
            #pasword = request.query_params['pass']

            if request.data['email'] is not None and request.data['pass'] is not None:

                data = request.data
                user = Users.objects.get(email=data['email'])
                print(user)
                if check_password(data['pass'], user.password):
                    serializer = UserSerializer(user)
                    refresh = RefreshToken.for_user(user)
                    print(request.data)

                    return Response({
                        'token': {
                            'refresh': str(refresh),
                            'access': str(refresh.access_token),
                        },
                        'user': serializer.data
                    }, status=status.HTTP_200_OK)

            return Response(status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UsersRegistrate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        try:
            isUser = Users.objects.get(email = data['email']).first
        finally:

            serializer = UserSerializer(data=data)
            if serializer.is_valid():

                user = serializer.save()
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsersLogout(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            print(e)
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)

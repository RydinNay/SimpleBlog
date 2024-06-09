from django.contrib import admin
from django.urls import path, include
from .views import UsersLogin, UsersRegistrate, UsersLogout

urlpatterns = [
    path('usersLogin/', UsersLogin.as_view()),
    path('usersRegistrate/', UsersRegistrate.as_view()),
    path('usersLogout/', UsersLogout.as_view()),
]

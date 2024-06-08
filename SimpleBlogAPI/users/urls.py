from django.contrib import admin
from django.urls import path, include
from .views import UsersCRUD

urlpatterns = [
    path('users/', UsersCRUD.as_view())
]

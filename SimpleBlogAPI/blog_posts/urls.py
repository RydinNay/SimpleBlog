from django.contrib import admin
from django.urls import path, include
from .views import PostsCreateRead, PostsUpdateDestroy

urlpatterns = [
    path('postsCreateRead/', PostsCreateRead.as_view()),
    path('postsUpdateDestroy/', PostsUpdateDestroy.as_view()),
]

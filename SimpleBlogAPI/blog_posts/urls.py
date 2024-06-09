from django.contrib import admin
from django.urls import path, include
from .views import PostsRead, PostsCreate, PostsUpdateDestroy

urlpatterns = [
    path('postsRead/', PostsRead.as_view()),
    path('postsCreate/', PostsCreate.as_view()),
    path('postsUpdateDestroy/', PostsUpdateDestroy.as_view()),
]

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('Users/', include('users.urls')),
    path('BlogPosts/', include('blog_posts.urls')),
    path('api/', include('rest_framework.urls')),
]

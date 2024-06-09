from rest_framework import generics
from rest_framework.response import Response
from django.http import Http404

from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import BasePermission
from rest_framework.permissions import AllowAny
from django_filters import rest_framework as filters

from .models import Posts
from .serializers import PostsSerializer


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in ['GET']


class PostsFilter(filters.FilterSet):
    author_name = filters.CharFilter(field_name='author__name', lookup_expr='icontains')
    topic = filters.CharFilter()
    data = filters.DateTimeFromToRangeFilter( lookup_expr='gte')

    class Meta:
        models = Posts
        fields = ('author_name', 'topic', 'timestamp',)


class Pagination(PageNumberPagination):
    page_size = 20

    def paginate_queryset(self, queryset, request, view=None):
        queryset = queryset.order_by('timestamp')
        return super().paginate_queryset(queryset, request, view)

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data
        })


class PostsCreate(generics.CreateAPIView):

    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    pagination_class = Pagination

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostsFilter


class PostsRead(generics.ListAPIView):
    permission_classes = [AllowAny]

    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    pagination_class = Pagination

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostsFilter


class PostsUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        queryset = Posts.objects.all()
        post_id = self.request.query_params.get('postId')
        if post_id is not None:
            queryset = queryset.filter(postId=post_id)
        return queryset

    def get_object(self):
        queryset = self.get_queryset()
        obj = queryset.first()
        if obj is None:
            raise Http404("Post not found")
        return obj

    serializer_class = PostsSerializer

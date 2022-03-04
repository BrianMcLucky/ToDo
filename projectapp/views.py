from django.shortcuts import render
from rest_framework import permissions
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet

from .filters import ToDoFilter, ProjectFilter
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


# class ProjectLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    # pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


# class ToDoLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 20


class ToDoModelViewSet(ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    # pagination_class = ToDoLimitOffsetPagination
    filterset_class = ToDoFilter

    def destroy(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.is_active = False
        obj.save()

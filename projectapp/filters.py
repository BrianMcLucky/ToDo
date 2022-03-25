from django_filters import rest_framework as filters
from .models import ToDo, Project


class ToDoFilter(filters.FilterSet):
    # project = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = ToDo
        fields = ['creator']


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']

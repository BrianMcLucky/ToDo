"""ToDo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from projectapp.views import ProjectModelViewSet, ToDoModelViewSet
from userapp.views import UserCustomViewSet
from userappv2.views import UserListAPIView

schema_view = get_schema_view(
    openapi.Info(
        title='ToDo',
        default_version='1',
        description='Documentation to out project',
        contact=openapi.Contact(email='admin@admin.local'),
        license=openapi.License(name='Galactic License'),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,)
)

router = DefaultRouter()
router.register('users', UserCustomViewSet)
router.register('projects', ProjectModelViewSet)
router.register('ToDo', ToDoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', obtain_auth_token),

    path('swagger/', schema_view.with_ui('swagger')),
    # path('redoc/', schema_view.with_ui('redoc')),
    # path('swagger<str:format>', schema_view.without_ui()),
    # path('api/<str:version>/user/', UserListAPIView.as_view()),
    # path('api/user/v1/', include('userappv2.urls', namespace='v1')),
    # path('api/user/v2/', include('userappv2.urls', namespace='v2')),
]

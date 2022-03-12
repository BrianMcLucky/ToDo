from django.urls import path

from userappv2.views import UserListAPIView

app_name = 'userappv2'

urlpatterns = [
    path('', UserListAPIView.as_view()),

]

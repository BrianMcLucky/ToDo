# from django.shortcuts import render
# from rest_framework.generics import ListAPIView
#
# from userappv2.models import User
# from userappv2.serializers import UserV2SecondModelSerializer, UserV2ModelSerializer
#
#
# class UserListAPIView(ListAPIView):
#     queryset = User.objects.all()
#
#     def get_serializer_class(self):
#         if self.request.version == 'v2':
#             return UserV2SecondModelSerializer
#         return UserV2ModelSerializer

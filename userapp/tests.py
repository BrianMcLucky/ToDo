from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import UserCustomViewSet
from .models import User
import math


class TestUserCustomViewSet(TestCase):

    def setUp(self) -> None:
        self.name = 'admin'
        self.password = 'admin_123'
        self.email = 'admin_123@gmail.com'
        self.data = {'first_name': 'Testuser1', 'last_name': 'Usertest1', 'username': 'Testusername1',
                     'email': 'Testuseremail1'}
        self.data_put = {'first_name': 'Testuser2', 'last_name': 'Usertest2', 'username': 'Testusername2',
                         'email': 'Testuseremail2@gmail.com'}
        self.url = 'api/users/'
        self.admin = User.objects.create_superuser(self.name, self.email, self.password)

    # APIRequestFactory
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UserCustomViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        view = UserCustomViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        force_authenticate(request, self.admin)
        view = UserCustomViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # APIClient

    def test_get_detail(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        response = client.get(f'{self.url}{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_guest(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        response = client.put(f'{self.url}{user.id}/', self.data_put)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_admin(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        client.login(username=self.name, password=self.password)
        response = client.put(f'{self.url}{user.id}/', self.data_put)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        user_ = User.objects.get(id=user.id)
        self.assertEqual(user_.first_name, 'Testuser2')
        self.assertEqual(user_.last_name, 'Usertest2')
        self.assertEqual(user_.username, 'Testusername2')
        self.assertEqual(user_.email, 'Testuseremail2@gmail.com')
        client.logout()

    def tearDown(self) -> None:
        pass


#     APISimpleTestCase
#
# class TestMath(APISimpleTestCase):
#
#     def test_sqrt(self):
#         self.assertEqual(math.sqrt(4), 2)

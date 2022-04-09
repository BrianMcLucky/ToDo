from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from .models import Project, ToDo
from .views import ProjectModelViewSet
from django.contrib.auth.models import User


# APITestCase

class TestProject(APITestCase):
    def setUp(self) -> None:
        self.data = {'name': 'project1', 'users': 'user1,user2', 'url': '127.0.0.1'}
        # self.data_put = {'name': 'project2', 'users': 'user3,user4', 'url': '127.1.1.1'}
        self.url = '/api/projects/'

    def test_get_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail_mixer(self):
        project = mixer.blend(Project, name='Project415')
        response = self.client.get(f'/api/projects/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_project = json.loads(response.content)
        self.assertEqual(response_project['name'], 'Project415')

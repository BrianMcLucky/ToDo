from django.conf import settings
from django.contrib.auth.models import User
from django.core.management import BaseCommand


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_superuser(username=settings.USERNAME, first_name=settings.FIRST_NAME,
                                      last_name=settings.LAST_NAME, password=settings.PASSWORD, email=settings.EMAIL)

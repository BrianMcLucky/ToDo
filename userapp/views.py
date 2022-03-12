from rest_framework import mixins, viewsets, permissions
from .models import User
from .serializers import UserModelSerializer


# class UserLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 4


class UserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin, viewsets.GenericViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    # pagination_class = UserLimitOffsetPagination



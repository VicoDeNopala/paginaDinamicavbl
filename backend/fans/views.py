from rest_framework import viewsets
from .models import Fan
from .serializers import FanSerializer

class FanViewSet(viewsets.ModelViewSet):
    queryset = Fan.objects.all()
    serializer_class = FanSerializer
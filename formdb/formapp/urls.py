from django.urls import path, include
from django.contrib.auth.models import User
from .models import Registrashion
from rest_framework import routers, serializers, viewsets
class RegistrashionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Registrashion
        fields = '__all__'

class RegistrashionViewSet(viewsets.ModelViewSet):
    queryset = Registrashion.objects.all()
    serializer_class = RegistrashionSerializer

router = routers.DefaultRouter()
router.register(r'register', RegistrashionViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
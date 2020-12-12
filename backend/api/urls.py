from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import ProductViewSet, PestViewSet


router = routers.DefaultRouter()
router.register('products', ProductViewSet)
router.register('pests', PestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
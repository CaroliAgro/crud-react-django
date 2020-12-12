from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken import views
from .views import UserList, UserDetail, UserCreate, UserDestroy


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', views.obtain_auth_token, name='api-tokn-auth'),
    path("users/", UserList.as_view()),
    path("users/<int:pk>/", UserDetail.as_view()),
    path("users/register/", UserCreate.as_view()),
    path("users/delete/<int:pk>/", UserDestroy.as_view()),
    path('api/', include('api.urls')),
    
]

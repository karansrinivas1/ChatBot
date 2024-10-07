from django.urls import path
from .views import RegisterUser, CustomTokenObtainPairView

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
]

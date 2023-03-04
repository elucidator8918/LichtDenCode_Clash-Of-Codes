from django.urls import path
from .views import SwipeAPI


urlpatterns = [
    path('', SwipeAPI.as_view(), name = 'swipe'),
]
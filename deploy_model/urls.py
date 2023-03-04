from django.urls import path
from .views import SentimentalModelAPI


urlpatterns = [
    path('', SentimentalModelAPI.as_view(), name = 'data-predict'),
]
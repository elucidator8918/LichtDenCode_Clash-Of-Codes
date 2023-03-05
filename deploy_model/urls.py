from django.urls import path
from .views import SentimentalModelAPI, Recommand


urlpatterns = [
    path('', SentimentalModelAPI.as_view(), name = 'data-predict'),
    path('recommand-system/', Recommand.as_view(), name = 'rec-predict'),
]
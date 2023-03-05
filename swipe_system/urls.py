from django.urls import path
from .views import SwipeAPI, PartyMail


urlpatterns = [
    path('', SwipeAPI.as_view(), name = 'swipe'),
    path('party_mail', PartyMail.as_view()),
]
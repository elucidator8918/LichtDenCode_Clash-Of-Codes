from django.shortcuts import render
from rest_framework_simplejwt.authentication import JWTAuthentication
from accounts.custompermisions import IsVerified
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# Create your views here.

class SentimentalModelAPI(APIView):
    def get(self, request):
        sid = SentimentIntensityAnalyzer()
        scores_negative = []
        scores_positive = []
        scores_neutral = []
        scores_compound = []
        sentence_sentiment_score = sid.polarity_scores(request.data.get('sentence','no'))    
        scores_negative.append(round(sentence_sentiment_score['neg']*100))
        scores_positive.append(sentence_sentiment_score['neu']*100)
        scores_neutral.append(sentence_sentiment_score['pos']*100)
        scores_compound.append(sentence_sentiment_score['compound']*100)
        return Response({'-ve':scores_negative,'+ve':scores_positive,'meh':scores_neutral,'avg':scores_compound})

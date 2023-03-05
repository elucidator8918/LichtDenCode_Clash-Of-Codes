from django.shortcuts import render
from rest_framework_simplejwt.authentication import JWTAuthentication
from accounts.custompermisions import IsVerified
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from .serializer import MatchSerializer
from rest_framework.response import Response
from django.core.mail import send_mail
from .models import Match
from django.conf import settings

# Create your views here.
class SwipeAPI(GenericAPIView):
    serializer_class = MatchSerializer
    queryset = Match.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated,IsVerified]
    def post(self, response):
        matches = {}
        user1 = response.user.id
        user2 = response.data.get('user2')
        for i in MatchSerializer(Match.objects.filter(user1 = user2),many = True).data:
            matches[i['id']] = i['user2']['id']
        if user1 not in matches.values():
            serializer = MatchSerializer(data = {'user1':user1,'user2':user2,'first_type':True})
            if not serializer.is_valid():
                return Response({'error': serializer.errors})
            serializer.save()
            return Response({'payload' : 'Swiped Successfully'})
        else:
            id = [i for i in matches if matches[i] == user1]
            match_obj = Match.objects.get(id = id[0])
            match_obj.second_type = True
            match_obj.save()
            return Response({'payload' : 'IT\'S A MATCH !!!'})
        
class PartyMail(APIView):
    def post(self,request):
        user = request.user
        try:
            subject = 'Invitation to Bombay Cocktail Bar Event on March 7th at 8 PM'
            message = f'Dear Kashish,\n\nWe would like to invite you to our upcoming event at Bombay Cocktail Bar on March 7th at 8 PM. This event promises to be an amazing evening filled with great music, delicious food, and refreshing drinks.\n\nWe are excited to bring together an eclectic mix of people to celebrate the vibrant nightlife of Mumbai. This event is the perfect opportunity to socialize and meet new people while enjoying the amazing ambience and hospitality of Bombay Cocktail Bar.\n\nThe dress code for the evening is smart casual, and we encourage you to come ready to have fun and make new friends. Please feel free to bring along any friends or colleagues who might be interested in joining us for the event.\n\nTo RSVP, please reply to this email and let us know the number of people in your group who will be attending. We look forward to seeing you on March 7th at 8 PM at Bombay Cocktail Bar.\n\nBest regards,\nMeow, Meow'
            email_from = settings.EMAIL_HOST_USER
            # recipient_list = [user.email, ]
            recipient_list = ['kashishgandhi6112003@gmail.com' ]
            send_mail( subject, message, email_from, recipient_list )
            return Response({'status': 200,'message' : 'Please Check Your Mail'})
        except Exception as e:
            return Response({'status': 405, 'error': str(e) ,'message': 'Sorry Some error has occured, Please try again after sometime'})
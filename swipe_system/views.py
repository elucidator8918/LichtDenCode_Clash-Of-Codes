from django.shortcuts import render
from rest_framework_simplejwt.authentication import JWTAuthentication
from accounts.custompermisions import IsVerified
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from .serializer import MatchSerializer
from rest_framework.response import Response
from .models import Match

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
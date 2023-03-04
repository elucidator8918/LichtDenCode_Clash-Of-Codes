from accounts.serializers import UserSerializer
from accounts.models import User
from .models import Match
from rest_framework import serializers

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['user1'] = UserSerializer(User.objects.get(pk=data['user1'])).data
        data['user2'] = UserSerializer(User.objects.get(pk=data['user2'])).data
        return data
        
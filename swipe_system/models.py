from django.db import models
from accounts.models import User

# Create your models here.
class Match(models.Model):
    user1 = models.ForeignKey(User, on_delete = models.CASCADE, related_name='User_1')
    user2 = models.ForeignKey(User, on_delete = models.CASCADE, related_name='User_2')
    first_type = models.BooleanField(default=False)
    second_type = models.BooleanField(default=False)
    is_unmatched = models.BooleanField(default=False)

    def __str__(self):
        return (self.user1.First_name+' '+self.user1.Last_name) + ' --Swiped-- ' + (self.user2.First_name+' '+self.user2.Last_name)
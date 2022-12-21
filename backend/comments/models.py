from django.db import models

# Create your models here.
class Comment(models.Model):
    user=models.ForeignKey()
    video_id=models.CharField(max_length=30)
    text=models.CharField(max_length=100)
    likes= models.IntegerField()
    dislikes= models.IntegerField()
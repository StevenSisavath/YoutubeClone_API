from rest_framework import serializers
from .models import Reply

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'text', 'comment_id', 'user_id']
        depth = 1
    comment_id = serializers.IntegerField(write_only=True)
from rest_framework import serializers
from events.models import EventMedia
from events.models import Event

class MediaUploadSerializer(serializers.ModelSerializer):
    event_title = serializers.CharField(source='event.title', read_only=True)
    uploaded_by_name = serializers.CharField(source='uploaded_by.get_full_name', read_only=True)
    
    class Meta:
        model = EventMedia
        fields = '__all__'
        read_only_fields = ('uploaded_by',)

    def validate(self, data):
        file = data.get('file')
        if file:
            # Check file size (max 50MB)
            if file.size > 50 * 1024 * 1024:
                raise serializers.ValidationError("File size must be less than 50MB")
            
            # Check file type
            allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/avi', 'video/mov']
            if file.content_type not in allowed_types:
                raise serializers.ValidationError("File type not supported")
        
        return data 
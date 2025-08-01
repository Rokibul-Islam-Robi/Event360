from rest_framework import serializers
from .models import Event, EventMedia, EventSchedule, TeamAssignment
from users.serializers import UserSerializer

class EventMediaSerializer(serializers.ModelSerializer):
    uploaded_by = UserSerializer(read_only=True)
    
    class Meta:
        model = EventMedia
        fields = ['id', 'media_type', 'file', 'thumbnail', 'caption', 
                 'uploaded_by', 'uploaded_at']
        read_only_fields = ['uploaded_by', 'uploaded_at']

class EventScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventSchedule
        fields = ['id', 'title', 'description', 'start_time', 'end_time', 
                 'location', 'created_at']
        read_only_fields = ['created_at']

class TeamAssignmentSerializer(serializers.ModelSerializer):
    team_member = UserSerializer(read_only=True)
    team_member_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = TeamAssignment
        fields = ['id', 'team_member', 'team_member_id', 'role', 'assigned_at']
        read_only_fields = ['assigned_at']

class EventSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    team_members = UserSerializer(many=True, read_only=True)
    media = EventMediaSerializer(many=True, read_only=True)
    schedules = EventScheduleSerializer(many=True, read_only=True)
    team_assignments = TeamAssignmentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'event_type', 'date', 'time',
                 'location', 'address', 'thumbnail', 'video_url', 'instagram_link',
                 'facebook_link', 'youtube_link', 'status', 'created_by',
                 'team_members', 'media', 'schedules', 'team_assignments',
                 'created_at', 'updated_at']
        read_only_fields = ['created_by', 'created_at', 'updated_at']

class EventCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'description', 'event_type', 'date', 'time',
                 'location', 'address', 'thumbnail', 'video_url', 'instagram_link',
                 'facebook_link', 'youtube_link', 'status']
    
    def create(self, validated_data):
        validated_data['created_by'] = self.context['request'].user
        return super().create(validated_data)

class EventUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'description', 'event_type', 'date', 'time',
                 'location', 'address', 'thumbnail', 'video_url', 'instagram_link',
                 'facebook_link', 'youtube_link', 'status']

class EventMediaCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventMedia
        fields = ['event', 'media_type', 'file', 'thumbnail', 'caption']
    
    def create(self, validated_data):
        validated_data['uploaded_by'] = self.context['request'].user
        return super().create(validated_data)

class EventScheduleCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventSchedule
        fields = ['event', 'title', 'description', 'start_time', 'end_time', 'location']

class TeamAssignmentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamAssignment
        fields = ['event', 'team_member', 'role'] 
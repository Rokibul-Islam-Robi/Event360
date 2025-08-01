from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404
from events.models import EventMedia
from .serializers import MediaUploadSerializer

class MediaUploadView(generics.CreateAPIView):
    serializer_class = MediaUploadSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)

class MediaListView(generics.ListAPIView):
    serializer_class = MediaUploadSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        event_id = self.request.query_params.get('event_id')
        if event_id:
            return EventMedia.objects.filter(event_id=event_id)
        return EventMedia.objects.all() 
from rest_framework import status, generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Event, EventMedia, EventSchedule, TeamAssignment
from .serializers import (
    EventSerializer, EventCreateSerializer, EventUpdateSerializer,
    EventMediaSerializer, EventMediaCreateSerializer,
    EventScheduleSerializer, EventScheduleCreateSerializer,
    TeamAssignmentSerializer, TeamAssignmentCreateSerializer
)

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and request.user.is_admin

class IsAdminOrTeamMember(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and (request.user.is_admin or request.user.is_team)

class EventListView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['event_type', 'status', 'date']
    search_fields = ['title', 'description', 'location']
    ordering_fields = ['date', 'created_at', 'title']
    ordering = ['-date']
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return EventCreateSerializer
        return EventSerializer
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminOrTeamMember()]
        return [permissions.AllowAny()]

class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return EventUpdateSerializer
        return EventSerializer
    
    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [IsAdminOrTeamMember()]
        return [permissions.AllowAny()]

class EventMediaListView(generics.ListCreateAPIView):
    serializer_class = EventMediaSerializer
    permission_classes = [IsAdminOrTeamMember]
    
    def get_queryset(self):
        event_id = self.kwargs.get('event_id')
        return EventMedia.objects.filter(event_id=event_id)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return EventMediaCreateSerializer
        return EventMediaSerializer

class EventMediaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EventMedia.objects.all()
    serializer_class = EventMediaSerializer
    permission_classes = [IsAdminOrTeamMember]

class EventScheduleListView(generics.ListCreateAPIView):
    serializer_class = EventScheduleSerializer
    permission_classes = [IsAdminOrTeamMember]
    
    def get_queryset(self):
        event_id = self.kwargs.get('event_id')
        return EventSchedule.objects.filter(event_id=event_id)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return EventScheduleCreateSerializer
        return EventScheduleSerializer

class EventScheduleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EventSchedule.objects.all()
    serializer_class = EventScheduleSerializer
    permission_classes = [IsAdminOrTeamMember]

class TeamAssignmentListView(generics.ListCreateAPIView):
    serializer_class = TeamAssignmentSerializer
    permission_classes = [IsAdminOrTeamMember]
    
    def get_queryset(self):
        event_id = self.kwargs.get('event_id')
        return TeamAssignment.objects.filter(event_id=event_id)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return TeamAssignmentCreateSerializer
        return TeamAssignmentSerializer

class TeamAssignmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamAssignment.objects.all()
    serializer_class = TeamAssignmentSerializer
    permission_classes = [IsAdminOrTeamMember]

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def upcoming_events(request):
    """Get upcoming events for public viewing"""
    from django.utils import timezone
    events = Event.objects.filter(
        date__gte=timezone.now().date(),
        status='upcoming'
    ).order_by('date', 'time')[:10]
    
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def completed_events(request):
    """Get completed events for gallery"""
    from django.utils import timezone
    events = Event.objects.filter(
        date__lt=timezone.now().date(),
        status='completed'
    ).order_by('-date')[:20]
    
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def my_events(request):
    """Get events for the authenticated user"""
    if request.user.is_admin:
        events = Event.objects.all()
    elif request.user.is_team:
        events = Event.objects.filter(team_members=request.user)
    else:
        # For customers, show events they've booked (if booking system is implemented)
        events = Event.objects.none()
    
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data) 
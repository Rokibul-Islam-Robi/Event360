from django.urls import path
from .views import (
    EventListView, EventDetailView,
    EventMediaListView, EventMediaDetailView,
    EventScheduleListView, EventScheduleDetailView,
    TeamAssignmentListView, TeamAssignmentDetailView,
    upcoming_events, completed_events, my_events
)

urlpatterns = [
    path('', EventListView.as_view(), name='event-list'),
    path('<int:pk>/', EventDetailView.as_view(), name='event-detail'),
    path('<int:event_id>/media/', EventMediaListView.as_view(), name='event-media-list'),
    path('media/<int:pk>/', EventMediaDetailView.as_view(), name='event-media-detail'),
    path('<int:event_id>/schedules/', EventScheduleListView.as_view(), name='event-schedule-list'),
    path('schedules/<int:pk>/', EventScheduleDetailView.as_view(), name='event-schedule-detail'),
    path('<int:event_id>/team-assignments/', TeamAssignmentListView.as_view(), name='team-assignment-list'),
    path('team-assignments/<int:pk>/', TeamAssignmentDetailView.as_view(), name='team-assignment-detail'),
    path('upcoming/', upcoming_events, name='upcoming-events'),
    path('completed/', completed_events, name='completed-events'),
    path('my-events/', my_events, name='my-events'),
] 
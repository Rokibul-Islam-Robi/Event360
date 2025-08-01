from django.db import models
from django.conf import settings
from django.utils import timezone

class Event(models.Model):
    EVENT_TYPES = (
        ('wedding', 'Wedding'),
        ('birthday', 'Birthday'),
        ('corporate', 'Corporate Event'),
        ('engagement', 'Engagement'),
        ('anniversary', 'Anniversary'),
        ('other', 'Other'),
    )
    
    STATUS_CHOICES = (
        ('upcoming', 'Upcoming'),
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    event_type = models.CharField(max_length=20, choices=EVENT_TYPES)
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=255)
    address = models.TextField()
    thumbnail = models.ImageField(upload_to='event_thumbnails/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)
    instagram_link = models.URLField(blank=True, null=True)
    facebook_link = models.URLField(blank=True, null=True)
    youtube_link = models.URLField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='created_events')
    team_members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='assigned_events', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-date', '-time']
    
    def __str__(self):
        return f"{self.title} - {self.date}"
    
    @property
    def is_upcoming(self):
        return self.date > timezone.now().date()
    
    @property
    def is_today(self):
        return self.date == timezone.now().date()

class EventMedia(models.Model):
    MEDIA_TYPES = (
        ('photo', 'Photo'),
        ('video', 'Video'),
    )
    
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='media')
    media_type = models.CharField(max_length=10, choices=MEDIA_TYPES)
    file = models.FileField(upload_to='event_media/')
    thumbnail = models.ImageField(upload_to='media_thumbnails/', blank=True, null=True)
    caption = models.TextField(blank=True, null=True)
    uploaded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-uploaded_at']
    
    def __str__(self):
        return f"{self.event.title} - {self.media_type} - {self.uploaded_at}"

class EventSchedule(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='schedules')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    start_time = models.TimeField()
    end_time = models.TimeField()
    location = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['start_time']
    
    def __str__(self):
        return f"{self.event.title} - {self.title} ({self.start_time})"

class TeamAssignment(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='team_assignments')
    team_member = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='event_assignments')
    role = models.CharField(max_length=100)  # e.g., "Photographer", "Videographer", "Assistant"
    assigned_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['event', 'team_member']
    
    def __str__(self):
        return f"{self.team_member.get_full_name()} - {self.role} - {self.event.title}" 
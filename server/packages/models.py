from django.db import models
from django.conf import settings

class Package(models.Model):
    PACKAGE_TYPES = (
        ('photography', 'Photography'),
        ('videography', 'Videography'),
        ('both', 'Photography & Videography'),
    )
    
    DIFFICULTY_LEVELS = (
        ('basic', 'Basic'),
        ('standard', 'Standard'),
        ('premium', 'Premium'),
        ('luxury', 'Luxury'),
    )
    
    name = models.CharField(max_length=255)
    package_type = models.CharField(max_length=20, choices=PACKAGE_TYPES)
    difficulty_level = models.CharField(max_length=20, choices=DIFFICULTY_LEVELS)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration_hours = models.IntegerField(help_text="Duration in hours")
    max_photos = models.IntegerField(blank=True, null=True, help_text="Maximum number of photos")
    max_videos = models.IntegerField(blank=True, null=True, help_text="Maximum number of videos")
    thumbnail = models.ImageField(upload_to='package_thumbnails/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['price']
    
    def __str__(self):
        return f"{self.name} - {self.get_package_type_display()} ({self.get_difficulty_level_display()})"

class PackageFeature(models.Model):
    package = models.ForeignKey(Package, on_delete=models.CASCADE, related_name='features')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    icon = models.CharField(max_length=50, blank=True, null=True, help_text="FontAwesome icon class")
    is_included = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['title']
    
    def __str__(self):
        return f"{self.package.name} - {self.title}"

class PackageGallery(models.Model):
    package = models.ForeignKey(Package, on_delete=models.CASCADE, related_name='gallery')
    image = models.ImageField(upload_to='package_gallery/')
    caption = models.CharField(max_length=255, blank=True, null=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.package.name} - {self.caption or 'Gallery Image'}"

class PackageReview(models.Model):
    RATING_CHOICES = (
        (1, '1 Star'),
        (2, '2 Stars'),
        (3, '3 Stars'),
        (4, '4 Stars'),
        (5, '5 Stars'),
    )
    
    package = models.ForeignKey(Package, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=RATING_CHOICES)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['package', 'user']
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.package.name} - {self.user.get_full_name()} ({self.rating} stars)" 
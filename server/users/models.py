from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
import random
import string

class User(AbstractUser):
    ROLE_CHOICES = (
        ('customer', 'Customer'),
        ('admin', 'Admin'),
        ('team', 'Team Member'),
    )
    
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='customer')
    phone = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    is_email_verified = models.BooleanField(default=False)
    is_phone_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.email
    
    @property
    def is_admin(self):
        return self.role == 'admin'
    
    @property
    def is_team(self):
        return self.role == 'team'
    
    @property
    def is_customer(self):
        return self.role == 'customer'

class OTP(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.email} - {self.otp}"
    
    def is_expired(self):
        from django.conf import settings
        expiry_time = self.created_at + timezone.timedelta(minutes=settings.OTP_EXPIRY_TIME)
        return timezone.now() > expiry_time
    
    @classmethod
    def generate_otp(cls, user):
        # Delete any existing unused OTPs for this user
        cls.objects.filter(user=user, is_used=False).delete()
        
        # Generate new OTP
        otp = ''.join(random.choices(string.digits, k=6))
        return cls.objects.create(user=user, otp=otp) 
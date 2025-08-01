from django.db import models
from django.conf import settings

class Equipment(models.Model):
    EQUIPMENT_TYPES = (
        ('camera', 'Camera'),
        ('lens', 'Lens'),
        ('lighting', 'Lighting'),
        ('audio', 'Audio Equipment'),
        ('tripod', 'Tripod & Stands'),
        ('accessories', 'Accessories'),
        ('other', 'Other'),
    )
    
    name = models.CharField(max_length=255)
    equipment_type = models.CharField(max_length=20, choices=EQUIPMENT_TYPES)
    description = models.TextField()
    daily_rate = models.DecimalField(max_digits=10, decimal_places=2)
    weekly_rate = models.DecimalField(max_digits=10, decimal_places=2)
    monthly_rate = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='equipment_images/', blank=True, null=True)
    is_available = models.BooleanField(default=True)
    quantity = models.IntegerField(default=1)
    condition = models.CharField(max_length=100, default='Excellent')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return f"{self.name} - {self.get_equipment_type_display()}"

class RentalOrder(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )
    
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='rental_orders')
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, related_name='rental_orders')
    start_date = models.DateField()
    end_date = models.DateField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.customer.get_full_name()} - {self.equipment.name} ({self.status})" 
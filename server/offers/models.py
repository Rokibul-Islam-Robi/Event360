from django.db import models
from django.utils import timezone

class Offer(models.Model):
    OFFER_TYPE_CHOICES = [
        ('percentage', 'Percentage Discount'),
        ('fixed', 'Fixed Amount Discount'),
        ('free_upgrade', 'Free Upgrade'),
        ('bonus_service', 'Bonus Service'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    offer_type = models.CharField(max_length=20, choices=OFFER_TYPE_CHOICES)
    discount_value = models.DecimalField(max_digits=10, decimal_places=2)
    discount_percentage = models.IntegerField(null=True, blank=True)
    minimum_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    code = models.CharField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)
    valid_from = models.DateTimeField()
    valid_until = models.DateTimeField()
    max_uses = models.IntegerField(null=True, blank=True)
    current_uses = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} - {self.code}"

    @property
    def is_valid(self):
        now = timezone.now()
        return (
            self.is_active and
            self.valid_from <= now <= self.valid_until and
            (self.max_uses is None or self.current_uses < self.max_uses)
        )

    def apply_discount(self, amount):
        if self.offer_type == 'percentage':
            return amount * (self.discount_percentage / 100)
        elif self.offer_type == 'fixed':
            return min(self.discount_value, amount)
        return 0 
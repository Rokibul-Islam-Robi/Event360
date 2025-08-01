from rest_framework import serializers
from .models import Booking
from packages.models import Package
from events.models import Event

class BookingSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.get_full_name', read_only=True)
    package_name = serializers.CharField(source='package.name', read_only=True)
    event_title = serializers.CharField(source='event.title', read_only=True)
    
    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ('customer', 'total_amount')

    def validate(self, data):
        package = data.get('package')
        event_date = data.get('event_date')
        
        if package and event_date:
            # Check if package is active
            if not package.is_active:
                raise serializers.ValidationError("Selected package is not available")
            
            # Check if event date is in the future
            from django.utils import timezone
            if event_date < timezone.now().date():
                raise serializers.ValidationError("Event date cannot be in the past")
        
        return data

    def create(self, validated_data):
        package = validated_data['package']
        validated_data['total_amount'] = package.price
        return super().create(validated_data) 
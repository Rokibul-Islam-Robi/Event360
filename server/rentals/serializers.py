from rest_framework import serializers
from .models import Equipment, RentalOrder
from users.models import User

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'

class RentalOrderSerializer(serializers.ModelSerializer):
    equipment_name = serializers.CharField(source='equipment.name', read_only=True)
    customer_name = serializers.CharField(source='customer.get_full_name', read_only=True)
    
    class Meta:
        model = RentalOrder
        fields = '__all__'
        read_only_fields = ('customer', 'total_amount')

    def validate(self, data):
        equipment = data.get('equipment')
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        
        if start_date and end_date and start_date >= end_date:
            raise serializers.ValidationError("End date must be after start date")
        
        if equipment and not equipment.is_available:
            raise serializers.ValidationError("Equipment is not available for rental")
        
        return data

    def create(self, validated_data):
        equipment = validated_data['equipment']
        start_date = validated_data['start_date']
        end_date = validated_data['end_date']
        
        # Calculate total amount based on rental duration
        days = (end_date - start_date).days
        if days <= 7:
            rate = equipment.daily_rate
        elif days <= 30:
            rate = equipment.weekly_rate / 7
        else:
            rate = equipment.monthly_rate / 30
        
        total_amount = rate * days
        validated_data['total_amount'] = total_amount
        
        return super().create(validated_data) 
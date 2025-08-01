from rest_framework import serializers
from .models import Offer

class OfferSerializer(serializers.ModelSerializer):
    is_valid = serializers.BooleanField(read_only=True)
    
    class Meta:
        model = Offer
        fields = '__all__'

    def validate(self, data):
        valid_from = data.get('valid_from')
        valid_until = data.get('valid_until')
        
        if valid_from and valid_until and valid_from >= valid_until:
            raise serializers.ValidationError("Valid until date must be after valid from date")
        
        if data.get('offer_type') == 'percentage':
            if not data.get('discount_percentage'):
                raise serializers.ValidationError("Discount percentage is required for percentage offers")
            if data.get('discount_percentage') <= 0 or data.get('discount_percentage') > 100:
                raise serializers.ValidationError("Discount percentage must be between 1 and 100")
        
        return data 
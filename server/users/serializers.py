from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, OTP

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'role', 
                 'phone', 'address', 'profile_picture', 'is_email_verified', 
                 'is_phone_verified', 'created_at']
        read_only_fields = ['id', 'created_at', 'is_email_verified', 'is_phone_verified']

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    confirm_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['email', 'username', 'first_name', 'last_name', 'password', 
                 'confirm_password', 'role', 'phone', 'address']
    
    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError("Passwords don't match")
        return attrs
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create_user(**validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    
    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        
        if email and password:
            user = authenticate(username=email, password=password)
            if not user:
                raise serializers.ValidationError('Invalid credentials')
            if not user.is_active:
                raise serializers.ValidationError('User account is disabled')
            attrs['user'] = user
        else:
            raise serializers.ValidationError('Must include email and password')
        
        return attrs

class OTPVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)
    
    def validate(self, attrs):
        email = attrs.get('email')
        otp = attrs.get('otp')
        
        try:
            user = User.objects.get(email=email)
            otp_obj = OTP.objects.filter(user=user, otp=otp, is_used=False).first()
            
            if not otp_obj:
                raise serializers.ValidationError('Invalid OTP')
            
            if otp_obj.is_expired():
                raise serializers.ValidationError('OTP has expired')
            
            attrs['user'] = user
            attrs['otp_obj'] = otp_obj
            
        except User.DoesNotExist:
            raise serializers.ValidationError('User not found')
        
        return attrs

class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()
    
    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError('No user found with this email')
        return value

class PasswordResetConfirmSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)
    new_password = serializers.CharField(min_length=8)
    confirm_password = serializers.CharField()
    
    def validate(self, attrs):
        if attrs['new_password'] != attrs['confirm_password']:
            raise serializers.ValidationError("Passwords don't match")
        
        try:
            user = User.objects.get(email=attrs['email'])
            otp_obj = OTP.objects.filter(user=user, otp=attrs['otp'], is_used=False).first()
            
            if not otp_obj:
                raise serializers.ValidationError('Invalid OTP')
            
            if otp_obj.is_expired():
                raise serializers.ValidationError('OTP has expired')
            
            attrs['user'] = user
            attrs['otp_obj'] = otp_obj
            
        except User.DoesNotExist:
            raise serializers.ValidationError('User not found')
        
        return attrs 
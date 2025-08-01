from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from .models import User, OTP
from .serializers import (
    UserSerializer, UserRegistrationSerializer, LoginSerializer,
    OTPVerificationSerializer, PasswordResetSerializer,
    PasswordResetConfirmSerializer
)

class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserRegistrationSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Generate and send OTP
        otp_obj = OTP.generate_otp(user)
        self.send_otp_email(user.email, otp_obj.otp)
        
        return Response({
            'message': 'Registration successful. Please check your email for OTP verification.',
            'user_id': user.id,
            'email': user.email
        }, status=status.HTTP_201_CREATED)
    
    def send_otp_email(self, email, otp):
        subject = 'Event 360 - Email Verification OTP'
        message = f'''
        Welcome to Event 360!
        
        Your OTP for email verification is: {otp}
        
        This OTP will expire in 10 minutes.
        
        Best regards,
        Event 360 Team
        '''
        
        try:
            send_mail(
                subject,
                message,
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Email sending failed: {e}")

class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        
        # Generate tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'Login successful',
            'tokens': {
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            },
            'user': UserSerializer(user).data
        }, status=status.HTTP_200_OK)

class OTPVerificationView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = OTPVerificationSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = serializer.validated_data['user']
        otp_obj = serializer.validated_data['otp_obj']
        
        # Mark OTP as used
        otp_obj.is_used = True
        otp_obj.save()
        
        # Mark user as email verified
        user.is_email_verified = True
        user.save()
        
        # Generate tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'Email verified successfully',
            'tokens': {
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            },
            'user': UserSerializer(user).data
        }, status=status.HTTP_200_OK)

class ResendOTPView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(email=email)
            otp_obj = OTP.generate_otp(user)
            self.send_otp_email(user.email, otp_obj.otp)
            
            return Response({
                'message': 'OTP sent successfully'
            }, status=status.HTTP_200_OK)
            
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
    def send_otp_email(self, email, otp):
        subject = 'Event 360 - Email Verification OTP'
        message = f'''
        Your new OTP for email verification is: {otp}
        
        This OTP will expire in 10 minutes.
        
        Best regards,
        Event 360 Team
        '''
        
        try:
            send_mail(
                subject,
                message,
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Email sending failed: {e}")

class PasswordResetView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = PasswordResetSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data['email']
        user = User.objects.get(email=email)
        
        # Generate and send OTP
        otp_obj = OTP.generate_otp(user)
        self.send_password_reset_email(user.email, otp_obj.otp)
        
        return Response({
            'message': 'Password reset OTP sent to your email'
        }, status=status.HTTP_200_OK)
    
    def send_password_reset_email(self, email, otp):
        subject = 'Event 360 - Password Reset OTP'
        message = f'''
        Your OTP for password reset is: {otp}
        
        This OTP will expire in 10 minutes.
        
        Best regards,
        Event 360 Team
        '''
        
        try:
            send_mail(
                subject,
                message,
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Email sending failed: {e}")

class PasswordResetConfirmView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = PasswordResetConfirmSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = serializer.validated_data['user']
        otp_obj = serializer.validated_data['otp_obj']
        new_password = serializer.validated_data['new_password']
        
        # Mark OTP as used
        otp_obj.is_used = True
        otp_obj.save()
        
        # Set new password
        user.set_password(new_password)
        user.save()
        
        return Response({
            'message': 'Password reset successful'
        }, status=status.HTTP_200_OK)

class UserProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    
    def get_object(self):
        return self.request.user

class LogoutView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        try:
            refresh_token = request.data.get('refresh_token')
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
            
            return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST) 
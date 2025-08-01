from rest_framework import status, generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Package, PackageFeature, PackageGallery, PackageReview
from .serializers import (
    PackageSerializer, PackageCreateSerializer,
    PackageFeatureSerializer, PackageFeatureCreateSerializer,
    PackageGallerySerializer, PackageGalleryCreateSerializer,
    PackageReviewSerializer, PackageReviewCreateSerializer
)

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and request.user.is_admin

class PackageListView(generics.ListCreateAPIView):
    queryset = Package.objects.filter(is_active=True)
    serializer_class = PackageSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['package_type', 'difficulty_level', 'is_active']
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'duration_hours', 'name']
    ordering = ['price']
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PackageCreateSerializer
        return PackageSerializer
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminOrReadOnly()]
        return [permissions.AllowAny()]

class PackageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    
    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return PackageCreateSerializer
        return PackageSerializer
    
    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [IsAdminOrReadOnly()]
        return [permissions.AllowAny()]

class PackageFeatureListView(generics.ListCreateAPIView):
    serializer_class = PackageFeatureSerializer
    permission_classes = [IsAdminOrReadOnly]
    
    def get_queryset(self):
        package_id = self.kwargs.get('package_id')
        return PackageFeature.objects.filter(package_id=package_id)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PackageFeatureCreateSerializer
        return PackageFeatureSerializer

class PackageFeatureDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PackageFeature.objects.all()
    serializer_class = PackageFeatureSerializer
    permission_classes = [IsAdminOrReadOnly]

class PackageGalleryListView(generics.ListCreateAPIView):
    serializer_class = PackageGallerySerializer
    permission_classes = [IsAdminOrReadOnly]
    
    def get_queryset(self):
        package_id = self.kwargs.get('package_id')
        return PackageGallery.objects.filter(package_id=package_id)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PackageGalleryCreateSerializer
        return PackageGallerySerializer

class PackageGalleryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PackageGallery.objects.all()
    serializer_class = PackageGallerySerializer
    permission_classes = [IsAdminOrReadOnly]

class PackageReviewListView(generics.ListCreateAPIView):
    serializer_class = PackageReviewSerializer
    
    def get_queryset(self):
        package_id = self.kwargs.get('package_id')
        return PackageReview.objects.filter(package_id=package_id)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PackageReviewCreateSerializer
        return PackageReviewSerializer
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

class PackageReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PackageReview.objects.all()
    serializer_class = PackageReviewSerializer
    
    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def package_types(request):
    """Get available package types"""
    package_types = Package.objects.filter(is_active=True).values_list('package_type', flat=True).distinct()
    return Response({
        'package_types': list(package_types)
    })

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def package_levels(request):
    """Get available package difficulty levels"""
    levels = Package.objects.filter(is_active=True).values_list('difficulty_level', flat=True).distinct()
    return Response({
        'difficulty_levels': list(levels)
    })

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def featured_packages(request):
    """Get featured packages (top rated)"""
    packages = Package.objects.filter(is_active=True).order_by('-reviews__rating')[:6]
    serializer = PackageSerializer(packages, many=True)
    return Response(serializer.data) 
from rest_framework import serializers
from .models import Package, PackageFeature, PackageGallery, PackageReview
from users.serializers import UserSerializer

class PackageFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageFeature
        fields = ['id', 'title', 'description', 'icon', 'is_included']

class PackageGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageGallery
        fields = ['id', 'image', 'caption', 'order']

class PackageReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = PackageReview
        fields = ['id', 'user', 'rating', 'comment', 'created_at']
        read_only_fields = ['user', 'created_at']

class PackageSerializer(serializers.ModelSerializer):
    features = PackageFeatureSerializer(many=True, read_only=True)
    gallery = PackageGallerySerializer(many=True, read_only=True)
    reviews = PackageReviewSerializer(many=True, read_only=True)
    average_rating = serializers.SerializerMethodField()
    review_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Package
        fields = ['id', 'name', 'package_type', 'difficulty_level', 'description',
                 'price', 'duration_hours', 'max_photos', 'max_videos', 'thumbnail',
                 'is_active', 'features', 'gallery', 'reviews', 'average_rating',
                 'review_count', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']
    
    def get_average_rating(self, obj):
        reviews = obj.reviews.all()
        if reviews:
            return sum(review.rating for review in reviews) / len(reviews)
        return 0
    
    def get_review_count(self, obj):
        return obj.reviews.count()

class PackageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = ['name', 'package_type', 'difficulty_level', 'description',
                 'price', 'duration_hours', 'max_photos', 'max_videos', 'thumbnail',
                 'is_active']

class PackageFeatureCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageFeature
        fields = ['package', 'title', 'description', 'icon', 'is_included']

class PackageGalleryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageGallery
        fields = ['package', 'image', 'caption', 'order']

class PackageReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageReview
        fields = ['package', 'rating', 'comment']
    
    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data) 
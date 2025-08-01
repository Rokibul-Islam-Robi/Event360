from django.urls import path
from .views import (
    PackageListView, PackageDetailView,
    PackageFeatureListView, PackageFeatureDetailView,
    PackageGalleryListView, PackageGalleryDetailView,
    PackageReviewListView, PackageReviewDetailView,
    package_types, package_levels, featured_packages
)

urlpatterns = [
    path('', PackageListView.as_view(), name='package-list'),
    path('<int:pk>/', PackageDetailView.as_view(), name='package-detail'),
    path('<int:package_id>/features/', PackageFeatureListView.as_view(), name='package-feature-list'),
    path('features/<int:pk>/', PackageFeatureDetailView.as_view(), name='package-feature-detail'),
    path('<int:package_id>/gallery/', PackageGalleryListView.as_view(), name='package-gallery-list'),
    path('gallery/<int:pk>/', PackageGalleryDetailView.as_view(), name='package-gallery-detail'),
    path('<int:package_id>/reviews/', PackageReviewListView.as_view(), name='package-review-list'),
    path('reviews/<int:pk>/', PackageReviewDetailView.as_view(), name='package-review-detail'),
    path('types/', package_types, name='package-types'),
    path('levels/', package_levels, name='package-levels'),
    path('featured/', featured_packages, name='featured-packages'),
] 
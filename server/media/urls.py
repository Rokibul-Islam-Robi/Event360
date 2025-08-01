from django.urls import path
from .views import MediaUploadView, MediaListView

urlpatterns = [
    path('upload/', MediaUploadView.as_view(), name='media-upload'),
    path('list/', MediaListView.as_view(), name='media-list'),
] 
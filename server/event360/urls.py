from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('users.urls')),
    path('api/events/', include('events.urls')),
    path('api/packages/', include('packages.urls')),
    path('api/rentals/', include('rentals.urls')),
    path('api/media/', include('media.urls')),
    path('api/bookings/', include('bookings.urls')),
    path('api/offers/', include('offers.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 
from django.urls import path
from .views import EquipmentListView, EquipmentDetailView, RentalOrderListView, RentalOrderDetailView

urlpatterns = [
    path('equipment/', EquipmentListView.as_view(), name='equipment-list'),
    path('equipment/<int:pk>/', EquipmentDetailView.as_view(), name='equipment-detail'),
    path('orders/', RentalOrderListView.as_view(), name='rental-order-list'),
    path('orders/<int:pk>/', RentalOrderDetailView.as_view(), name='rental-order-detail'),
] 
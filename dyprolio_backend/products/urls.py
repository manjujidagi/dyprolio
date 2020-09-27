from django.urls import path
from products import views

urlpatterns = [
    path('', views.ProductsView.as_view()),
    path('<int:pk>/', views.ProductDetail.as_view())
]
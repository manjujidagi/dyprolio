from django.urls import path
from secure import views

urlpatterns = [
    path('login', views.SecureLoginView.as_view()),
    path('add_user', views.SecureAddUserView.as_view()),
    path('password_change', views.SecurePasswordChangeView.as_view())
]
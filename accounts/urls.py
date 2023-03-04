from django.urls import path
from .views import RegistrationAPI, SendVerficationAPI, ValidateVerificationView, PasswordResetAPI, PasswordResetView, UserApi
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView
)


urlpatterns = [
    path('user/', UserApi.as_view(), name = 'user'),
    path('register/', RegistrationAPI.as_view(), name = 'register_user'),
    path('logout/',  TokenBlacklistView.as_view(), name = 'logout_user'),
    path('login/', TokenObtainPairView.as_view(), name = 'login_user'),
    path('token-refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
    path('email-verification/', SendVerficationAPI.as_view(), name = 'send-email-verification'),
    path('email-verification/<id>/<token>/', ValidateVerificationView.as_view(), name = 'verify-email'),
    path('password-reset/', PasswordResetAPI.as_view(), name = 'password-reset'),
    path('password-reset-redirect/<id>/<token>/', PasswordResetView.as_view(), name = 'password-reset-redirect'),
]
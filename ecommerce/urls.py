from ecom.views import create_checkout_session
from django.contrib import admin
from django.urls import path
from django.shortcuts import redirect
from ecom import views
from django.contrib.auth.views import LoginView,LogoutView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshSlidingView,
    
)

router = DefaultRouter()
router.register(r'customers', views.CustomerViewSet)
router.register(r'products', views.ProductViewSet)
router.register(r'orders', views.OrderViewSet)
router.register(r'feedback', views.FeedbackViewSet)

def redirect_to_api(request):
    return redirect('/api/') 

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('api/', include(router.urls)), 
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshSlidingView.as_view(), name='token_refresh'),
    path("create-checkout-session/", create_checkout_session, name="checkout"),
    path('', redirect_to_api),  
]




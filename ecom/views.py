from django.shortcuts import render,redirect,reverse
from . import forms,models
from django.http import HttpResponseRedirect,HttpResponse
from django.core.mail import send_mail
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required,user_passes_test
from django.contrib import messages
from django.conf import settings
from rest_framework import viewsets
from .models import Customer, Product, Orders, Feedback
from .serializers import CustomerSerializer, ProductSerializer, OrderSerializer, FeedbackSerializer
import stripe
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
from dotenv import load_dotenv

load_dotenv()

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

STRIPE_SECRET_KEY = os.getenv('STRIPE_SECRET_KEY')
stripe.api_key = STRIPE_SECRET_KEY

@csrf_exempt  # Use this if you're testing with a GET request
def create_checkout_session(request):
    if request.method == 'POST':  # It's common to create a session via POST
        try:
            # Create a new checkout session
            session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[
                    {
                        'price_data': {
                            'currency': 'usd',
                            'product_data': {
                                'name': 'T-shirt',
                            },
                            'unit_amount': 2000,  # Amount in cents
                        },
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url='http://127.0.0.1:8000/success/',
                cancel_url='http://127.0.0.1:8000/cancel/',
            )
            return JsonResponse({'id': session.id})  # Return the session ID
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)  # Handle errors

    # If the request method is not POST, return an error response
    return JsonResponse({'error': 'Invalid request method'}, status=400)


def home_view(request):
    return JsonResponse({"message": "Bienvenido a la API de mi tienda"})

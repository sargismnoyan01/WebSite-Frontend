from django.urls import path
from .views import *


urlpatterns = [
    path('',HomeListView.as_view(),name='home'),
    path('register/',RegisterDetailView.as_view(),name='register'),
    path('login/',LoginPage,name='login'),
    path('logout/',LogoutPage,name='logout'),
    path('detail/<int:id>/',ProductDetailView.as_view(),name='detail'),
    path('saves/',SavePageListView.as_view(),name='savepage'),
    
]
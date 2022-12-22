from django.urls import path, include
from replies import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_replies),
    path('replies/', views.get_all_replies),
    path('<int:pk>/', views.comment_replies),
]
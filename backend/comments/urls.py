from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    
    path('', views.user_comments),
    path('all/', views.get_all_comments),
    path('<int:pk>/', views.user_comments_update),
    path('<str:cpk>/', views.video_id_comment),
    path('<str:cpk>/', views.create_comment),
    
]
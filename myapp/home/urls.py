from django.contrib import admin
from django.urls import path,include
from home import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index,name='home'),
    path('index/', views.index,name='home'),
    path('login/', views.loginuser,name='login'),
    path('register/', views.register,name='register'),
    path('contact/', views.contact,name='contact'),
    path('game/', views.game,name='game'),
    path('stone/', views.stone,name='stone'),
    path('logout', views.logoutuser,name='logout'),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

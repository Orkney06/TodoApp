from django.contrib import admin
from django.db import router
from django.urls import path, include
from rest_framework import routers
from todo import views
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]

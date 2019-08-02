from django.urls import path
import blog.views as views
from django.views.generic import TemplateView

urlpatterns = [
    path('create', views.PostCreate.as_view(template_name="post_form.html")),
    path('list', views.PostList.as_view(template_name="post_list.html")),
    path('update', views.PostUpdate.as_view(template_name="post_form.html")),
    path('delete', views.PostDelete.as_view(template_name="post_confirm_delete.html")),
]
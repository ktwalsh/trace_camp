from django.urls import path
import eventapp.views as views
from django.views.generic import TemplateView

urlpatterns = [
     path('signup/', views.SignUp.as_view(template_name="signup.html"), name="signup"),
     path('view', views.ListEvent.as_view(template_name="event_list.html")),
     path('create', views.CreateEvent.as_view(template_name="event_form.html")),
     path('update/<slug:pk>', views.UpdateEvent.as_view(template_name="event_form.html")),
     path('delete/<slug:pk>', views.DeleteEvent.as_view(template_name="event_confirm_delete.html")),
     path('details/<slug:pk>', views.EventDetails.as_view(template_name="event_details.html")),
     path('attendees/<slug:pk>', views.AttendeeDetails.as_view(template_name="attendee_list.html")),          
     path('addattendees/<slug:pk>', views.addAttendee),     
     path('view/search', views.searchEventList.as_view(template_name="event_list.html")),
     path('profile/<slug:pk>', views.ViewProfile.as_view(template_name="profile.html")),
]
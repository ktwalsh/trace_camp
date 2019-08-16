from django.shortcuts import render
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from eventapp.models import Event
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.shortcuts import redirect
from django.db.models import Q
from django.contrib.auth.models import AbstractUser, User
from authentication.forms import UserCreateForm
# Create your views here.
class ListEvent(ListView):
    model = Event

def redirect_view(request):
    return redirect("/home")

class CreateEvent(LoginRequiredMixin, CreateView):
    model = Event
    fields = ['title', 'description', 'location', 'date', 'time']

    def get_success_url(self):
        return '/event/view'

    def form_valid(self, form):
        form.instance.creator_id = self.request.user.id
        return super(CreateEvent, self).form_valid(form)


class UpdateEvent(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Event
    fields = ['title', 'description', 'location', 'date', 'time']
    
    def test_func(self):
        return self.request.user.id == self.get_object().creator.id

    def get_success_url(self):
        return '/event/view'

class DeleteEvent(LoginRequiredMixin, DeleteView):
    model = Event
    success_url = "/event/view"

class EventDetails(DetailView):
    model = Event

class AttendeeDetails(DetailView):
    model = Event

class SignUp(CreateView):    
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

class ViewProfile(LoginRequiredMixin, UserPassesTestMixin, DetailView):
    model = User

    def test_func(self):
        return self.request.user.id == int(self.kwargs['pk'])

    def get_context_data(self, **kwargs):
        context = super(ViewProfile, self).get_context_data(**kwargs)
        context['events'] = Event.objects.all()
        return context

class EditProfile(LoginRequiredMixin, UpdateView):
    model = User
    form_class = UserCreateForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'
    
    # def user_events(self, pk):
    #     current_user=User.objects.get(pk=pk)
    #     print(User.objects)
    #     object_list = Event.objects.filter(creator=current_user)
    #     return object_list
    
# Searches for events based on zip code query 
class searchEventList(ListView):
    model = Event
    
    def get_queryset(self):
        query = self.request.GET.get('find_nearby')
        object_list = Event.objects.filter(Q(location__icontains=query))
        return object_list

#Takes request from event_details.html and add current user to attendee list
def addAttendee(request, pk):    
    Event.objects.get(pk=pk).attendees.add(request.user)
    print(Event.objects.get(pk=pk).creator)
    return redirect(f'/event/details/{pk}')

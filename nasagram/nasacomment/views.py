from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def view_home(request):
    #print("this is the homepage", request)
    return HttpResponse("This is the home page", status=200)
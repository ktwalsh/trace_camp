from django.shortcuts import render
from django.vies.generic.edit import CreateView
from crud.models import ProductModel

# Create your views here.
class ProductCreateView(CreateView):
    model = Product
    fields = ['__all__']
    success_url = '/'
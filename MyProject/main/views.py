from typing import Any
from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect, render
from django.views.generic import ListView,DetailView
from .forms import *
from django.contrib import messages
from .models import *
from django.core.serializers import serialize
import json




class HomeListView(ListView):
    template_name = 'index.html'


    def get(self,request):
        category = Category.objects.all()
        subcategory = SubCategory.objects.all()
        products = MainProduct.objects.all()
        product_data = json.loads(serialize('json', products))



        context = {
            'category':category,
            'subcategory':subcategory,
            'product_data':product_data,
            
                  }


        return render(request,self.template_name,context)
    

class RegisterDetailView(DetailView):
    template_name = 'register.html'

    def get(self, request):
        form = CustomUserCreationForm()
        context = {'form': form}
        return render(request, self.template_name, context)

    def post(self, request):
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            for field, errors in form.errors.items():
                for error in errors:
                    messages.warning(request, error)

        context = {'form': form}
        return render(request, self.template_name, context)
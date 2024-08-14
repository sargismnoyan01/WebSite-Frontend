from typing import Any
from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect, render
from django.views.generic import ListView,DetailView
from .forms import *
from django.contrib import messages
from .models import *
from django.core.serializers import serialize
import json
from django.contrib.auth import authenticate,login,logout





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

def LoginPage(request):


    if request.method == 'POST':
        username = request.POST.get('username')

        password = request.POST.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            next_param = request.POST.get('next', None)
            print(f'Next Param: {next_param}') 
            if next_param:
                return redirect(next_param)
            else:
                return redirect('home')
        else:
            messages.warning(request, 'Սխալ մուտքանուն կամ գաղտնաբառ')

    return render(request, 'login.html')


def LogoutPage(request):
    logout(request)
    return redirect('home')


class ProductDetailView(DetailView):
    model =   # Specify your model here
    template_name = 'detail.html'  # Your detail template
    context_object_name = 'product'  # The name of the object in the context

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Add any additional context data if needed
        return context    
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
import json
import os







class HomeListView(ListView):
    template_name = 'index.html'


    def get(self,request):
        file_path = os.path.join(os.path.dirname(__file__), 'products_data.json')
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        

        category = Category.objects.all()
        subcategory = SubCategory.objects.all()
        products = MainProduct.objects.all()
        product_data = json.loads(serialize('json', products))
        price_now = 0
        for i in products:
            i.price_now = i.price_old - ((i.price_old/100) * i.discount)
        



        context = {
            'data':data,
            'category':category,
            'subcategory':subcategory,
            'product_data':product_data,
            'products':products,
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
    
    template_name = 'detail.html' 

    def get(self,request,id):
        product=MainProduct.objects.get(id = id)

        context = {
            'product':product,
                  }
        
        return render(request,self.template_name,context)
    

class SavePageListView(ListView):
    template_name = 'saved.html'

    def get(self,request):
        context = {

                  }

        return render(request,self.template_name,context)
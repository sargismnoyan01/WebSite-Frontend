from typing import Any
from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect, render
from django.views.generic import ListView,DetailView
from .forms import *
from django.contrib import messages




class HomeListView(ListView):
    template_name = 'index.html'


    def get(self,request):



        context = {

                  }


        return render(request,self.template_name,context)
    

class RegisterDetailView(DetailView):
    template_name = 'register.html'


    def get(self, request):
        form = CustomUserCreationForm()

        context = {
            'form':form,
                  }
        return render(request,self.template_name,context)

    def post(self,request):
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            messages.warning(request,'Դաշտերը ճիշտ լրացված չեն')

        context = {
            'form':form,
                  }
        return render(request,self.template_name,context)
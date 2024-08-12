from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser


# class CustomUserCreationForm(UserCreationForm):
#     class Meta(UserCreationForm.Meta):
#         model = CustomUser
#         fields = list(UserCreationForm.Meta.fields) + ['phone_number','purchases','store','registrationdate']


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone_number', 'password1', 'password2')
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].error_messages.update({
            'required': 'Անունը պարտադիր է',
            'unique': 'Այս անունն արդեն օգտագործվում է',
        })
        self.fields['email'].error_messages.update({
            'required': 'Էլ. փոստը պարտադիր է',
            'invalid': 'Խնդրում ենք մուտքագրել վավեր էլ. փոստի հասցե',
        })
        self.fields['phone_number'].error_messages.update({
            'required': 'Հեռախոսահամարը պարտադիր է',
            'invalid': 'Խնդրում ենք մուտքագրել վավեր հեռախոսահամար',
        })
        self.fields['password1'].error_messages.update({
            'required': 'Գաղտնաբառը պարտադիր է',
            'password_mismatch': 'Գաղտնաբառերը չեն համընկնում',
        })
        self.fields['password2'].error_messages.update({
            'required': 'Կրկնեք գաղտնաբառը',
            'password_mismatch': 'Գաղտնաբառերը չեն համընկնում',
        })
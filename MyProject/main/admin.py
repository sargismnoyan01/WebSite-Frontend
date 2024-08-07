from django.contrib import admin
from .models import *



admin.site.register(CustomUser)
admin.site.register(Company)
admin.site.register(Category)
admin.site.register(SubCategory)

@admin.register(MainProduct)
class ApplyModelAdmin(admin.ModelAdmin):
    list_display=['name','company','price_old','discount'] 
    list_display_links=['name','company','price_old','discount']
    search_fields=['name','company','price_old','discount']

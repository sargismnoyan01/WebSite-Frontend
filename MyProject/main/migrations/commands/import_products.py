from django.core.management.base import BaseCommand
import json
import requests
from django.core.files.base import ContentFile
from main.models import MainProduct, SubCategory, Company  # Replace 'your_app' with the actual app name

class Command(BaseCommand):
    help = 'Imports product data from a JSON file into the database'

    def add_arguments(self, parser):
        parser.add_argument('products_data', type=str, help='Path to the JSON file containing product data')

    def handle(self, *args, **options):
        with open(options['products_data'], 'r', encoding='utf-8') as f:
            data = json.load(f)

        for item in data:
            print(item)
            category_name = item.get('Category Name')
            category, _ = SubCategory.objects.get_or_create(name=category_name)
            company, _ = Company.objects.get_or_create(name='Default Company')
            img_response = requests.get(item.get('Image URL'))
            img_name = item.get('media_1').split('\\')[-1]
            img_file = ContentFile(img_response.content, img_name)
            MainProduct.objects.create(
                name=item.get('Product Name'),
                price_old=0,
                discount=0,
                img=img_file,
                company=company,
                image_2=img_file,
                category=category
            )

        self.stdout.write(self.style.SUCCESS('Successfully imported products'))

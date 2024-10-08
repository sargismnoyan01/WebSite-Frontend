# Generated by Django 5.0.7 on 2024-08-10 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_mainproduct_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='image',
            field=models.ImageField(blank=True, default=0, upload_to='media/users', verbose_name='User Image'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='customuser',
            name='purchases',
            field=models.FloatField(blank=True, default=0, verbose_name='purchases made by the user'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='store',
            field=models.CharField(blank=True, max_length=255, verbose_name='Most used stores'),
        ),
    ]

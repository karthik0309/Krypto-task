# Generated by Django 4.0.6 on 2022-07-29 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
        ('favourites', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favourites',
            name='total',
        ),
        migrations.AlterField(
            model_name='favourites',
            name='products',
            field=models.ManyToManyField(to='products.products'),
        ),
    ]

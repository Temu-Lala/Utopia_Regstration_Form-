# Generated by Django 5.0.1 on 2024-01-04 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registrashion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255)),
                ('message', models.TextField()),
                ('number', models.IntegerField()),
                ('addres', models.CharField(max_length=255)),
                ('skill', models.CharField(max_length=255)),
            ],
        ),
    ]

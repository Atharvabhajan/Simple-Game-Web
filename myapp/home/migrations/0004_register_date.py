# Generated by Django 5.0.3 on 2024-03-31 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_register'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='date',
            field=models.DateField(auto_now_add=True),
            preserve_default=False,
        ),
    ]

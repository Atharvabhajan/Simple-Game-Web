from django.contrib import admin
from home.models import Contact
# Register your models here.
admin.site.register(Contact)
admin.site.site_header = "Game-Web"
admin.site.site_title = "Game-web user admin Portal"
admin.site.index_title = "Welcome to Game-Web"
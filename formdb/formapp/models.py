from django.db import models

class Registrashion (models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    message = models.TextField()
    number=  models.IntegerField(15)
    addres = models.CharField(max_length=255 )
    skill = models.CharField(max_length=255)

    def __str__(self):
        return self.name


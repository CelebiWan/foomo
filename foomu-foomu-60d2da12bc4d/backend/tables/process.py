from django.db import models
from django.core.exceptions import ValidationError


class Process(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    alias = models.CharField(null=False, max_length=100, unique=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.alias

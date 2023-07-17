from django.db import models
from django.core.exceptions import ValidationError
from .recipe import Recipe
from .formula_type import FormulaType


class Experiment(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    recipe = models.OneToOneField(
        Recipe, to_field="alias", null=False, on_delete=models.RESTRICT
    )
    formula_type = models.ForeignKey(
        FormulaType, blank=True, to_field="alias", on_delete=models.RESTRICT
    )
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Experiment Version: {self.id}"

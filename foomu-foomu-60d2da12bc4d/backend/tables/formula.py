from django.db import models
from django.core.exceptions import ValidationError
from .formula_type import FormulaType


class Formula(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    alias = models.CharField(null=False, max_length=100, unique=True)
    type = models.ForeignKey(FormulaType, to_field="alias", on_delete=models.RESTRICT)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.alias
    
    def clean(self):
        if not self.alias and not self.type:
            raise ValidationError(
                "Alias and type must be provided together."
            )
        
        queryset = Formula.objects.filter(
            alias=self.alias,
            type=self.type,
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists():
            raise ValidationError(
                "Combination of alias and type already exist."
            )
    class Meta:
        unique_together = ["alias", "type"]
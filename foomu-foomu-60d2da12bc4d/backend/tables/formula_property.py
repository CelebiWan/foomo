from django.db import models
from django.core.exceptions import ValidationError
from .formula import Formula
from .property_type import PropertyType


class FormulaProperty(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    formula_id = models.ForeignKey(Formula, on_delete=models.CASCADE)
    property_type = models.ForeignKey(PropertyType, on_delete=models.RESTRICT)
    value = models.FloatField(blank=True, null=True)
    boolean = models.BooleanField(blank=True, null=True)
    comment = models.CharField(blank=True, null=True, max_length=200)

    def clean(self):
        if not self.formula_id and not self.property_type:
            raise ValidationError(
                "formula_id and property_type must be provided together."
            )

        queryset = FormulaProperty.objects.filter(
            formula_id=self.formula_id,
            property_type=self.property_type,
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists():
            raise ValidationError(
                "Combination of formula_id and property_type already exist."
            )
        
    class Meta:
        unique_together = ["formula_id", "property_type"]

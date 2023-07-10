from django.db import models
from django.core.exceptions import ValidationError

from .property_type import PropertyType
from .experiment import Experiment


class QuantitativeResult(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    experiment_id = models.ForeignKey(Experiment, on_delete=models.RESTRICT)
    property_type = models.ForeignKey(
        PropertyType, to_field="alias", null=False, on_delete=models.CASCADE
    )
    boolean = models.BooleanField(blank=True, null=True)
    comment = models.CharField(blank=True, null=True, max_length=200)

    def clean(self):
        if not self.experiment_id and not self.property_type:
            raise ValidationError(
                "experiment_id and property_type must be provided together."
            )

        queryset = QuantitativeResult.objects.filter(
            experiment_id=self.experiment_id,
            property_type=self.property_type,
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists():
            raise ValidationError(
                "Combination of experiment_id and property_type already exist."
            )

    class Meta:
        unique_together = ["experiment_id", "property_type"]

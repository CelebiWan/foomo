from django.db import models
from django.core.exceptions import ValidationError
from .experiment import Experiment
from .qualitative_type import QualitativeType


class QualitativeResult(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    experiment_id = models.ForeignKey(Experiment, on_delete=models.RESTRICT)
    qualitative_type = models.ForeignKey(
        QualitativeType, to_field="alias", null=False, on_delete=models.CASCADE
    )
    boolean = models.BooleanField(blank=True, null=True)
    comment = models.CharField(blank=True, null=True, max_length=200)

    def clean(self):
        if not self.experiment_id and not self.qualitative_type:
            raise ValidationError(
                "experiment_id and qualitative_type must be provided together."
            )

        queryset = QualitativeResult.objects.filter(
            experiment_id=self.experiment_id,
            qualitative_type=self.qualitative_type,
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists():
            raise ValidationError(
                "Combination of experiment_id and qualitative_type already exist."
            )

    class Meta:
        unique_together = ["experiment_id", "qualitative_type"]

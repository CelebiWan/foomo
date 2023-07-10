from django.db import models
from django.core.exceptions import ValidationError
from .experiment import Experiment
from .validation import Validation
from .equipment import Equipment
from .qualitative_result import QualitativeResult
from .quantitative_result import QuantitativeResult


class ExperimentValidation(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    experiment_id = models.ForeignKey(Experiment, on_delete=models.RESTRICT)
    validation = models.ForeignKey(
        Validation, to_field="alias", null=False, on_delete=models.RESTRICT
    )
    validation_metadata = models.CharField(blank=True, null=True, max_length=100)
    equipment = models.ForeignKey(
        Equipment, to_field="alias", blank=True, null=True, on_delete=models.RESTRICT
    )
    equipment_metadata = models.CharField(blank=True, null=True, max_length=100)
    step = models.IntegerField(blank=True, null=True)
    period = models.CharField(blank=True, null=True, max_length=50)
    quantitative_result_id = models.ForeignKey(
        QuantitativeResult, blank=True, null=True, on_delete=models.RESTRICT
    )
    qualitative_result_id = models.ForeignKey(
        QualitativeResult, blank=True, null=True, on_delete=models.RESTRICT
    )

    def clean(self):
        if not self.experiment_id and not self.validation:
            raise ValidationError(
                "experiment_id and validation must be provided together."
            )

        queryset = ExperimentValidation.objects.filter(
            experiment_id=self.experiment_id,
            validation=self.validation,
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists():
            raise ValidationError(
                "Combination of experiment_id and validation already exist."
            )

    class Meta:
        unique_together = ["experiment_id", "validation"]

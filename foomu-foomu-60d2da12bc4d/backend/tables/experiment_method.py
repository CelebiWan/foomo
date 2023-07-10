from django.db import models
from django.core.exceptions import ValidationError
from .experiment import Experiment
from .process import Process
from .equipment import Equipment


class ExperimentMethod(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    experiment_id = models.ForeignKey(Experiment, on_delete=models.RESTRICT)
    process = models.ForeignKey(
        Process, to_field="alias", null=False, on_delete=models.RESTRICT
    )
    process_metadata = models.CharField(blank=True, null=True, max_length=100)
    equipment = models.ForeignKey(
        Equipment, to_field="alias", blank=True, null=True, on_delete=models.RESTRICT
    )
    equipment_metadata = models.CharField(blank=True, null=True, max_length=100)
    step = models.IntegerField(blank=True, null=True)
    period = models.CharField(blank=True, null=True, max_length=50)

    def clean(self):
        if not self.experiment_id and not self.process:
            raise ValidationError(
                "experiment_id and process must be provided together."
            )

        queryset = ExperimentMethod.objects.filter(
            experiment_id=self.experiment_id,
            process=self.process,
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists():
            raise ValidationError(
                "Combination of experiment_id and process already exist."
            )

    class Meta:
        unique_together = ["experiment_id", "process"]

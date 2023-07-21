from django.db import models
from django.core.exceptions import ValidationError
from .ingredient import Ingredient
from .interaction_type import InteractionType


class Interaction(models.Model):
    ingredient1 = models.ForeignKey(
        Ingredient, to_field="alias", on_delete=models.RESTRICT, related_name="dependent_material1"
    )
    ingredient2 = models.ForeignKey(
        Ingredient, to_field="alias", on_delete=models.RESTRICT, related_name="dependent_material2"
    )
    interaction_type = models.ForeignKey(InteractionType, to_field="alias", on_delete=models.RESTRICT)
    value = models.FloatField(blank=True, null=True)
    boolean = models.BooleanField(blank=True, null=True)
    comment = models.CharField(blank=True, null=True, max_length=200)

    def __str__(self):
        return f"{self.ingredient1.name} - {self.ingredient2.name} - {self.interaction_type}"

    def clean(self):
        if not self.ingredient1 and not self.ingredient2 and not self.interaction_type:
            raise ValidationError(
                "Ingredient1, ingredient2 and interaction_type must be provided together."
            )

        if self.ingredient1 == self.ingredient2:
            raise ValidationError("Ingredient 1 cannot be Ingredient 2.")

        queryset = Interaction.objects.filter(
            ingredient1=self.ingredient1,
            ingredient2=self.ingredient2,
            interaction_type=self.interaction_type,
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists():
            raise ValidationError(
                "Combination of ingredient1, ingredient2 and interaction_type already exist."
            )

    class Meta:
        unique_together = ["ingredient1", "ingredient2", "interaction_type"]

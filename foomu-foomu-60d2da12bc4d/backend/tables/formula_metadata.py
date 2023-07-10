from django.db import models
from django.core.exceptions import ValidationError
from .ingredient import Ingredient
from .formula import Formula
from .recipe import Recipe
from .functionality import Functionality


class FormulaMetadata(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    formula = models.ForeignKey(Formula, to_field="alias", on_delete=models.CASCADE)
    funtionality = models.ForeignKey(
        Functionality,
        to_field="alias",
        on_delete=models.RESTRICT,
        blank=True,
        null=True,
    )
    ingredient_component = models.ForeignKey(
        Ingredient,
        blank=True,
        default=None,
        null=True,
        to_field="alias",
        on_delete=models.RESTRICT,
    )
    recipe_component = models.ForeignKey(
        Recipe,
        blank=True,
        default=None,
        null=True,
        to_field="alias",
        on_delete=models.RESTRICT,
    )
    percentage = models.DecimalField(max_digits=6, decimal_places=3)

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def clean(self):
        if self.ingredient_component is None and self.recipe_component is None:
            raise ValidationError(
                "Either ingredient/recipe_component must be provided."
            )
        if self.ingredient_component and self.recipe_component:
            raise ValidationError(
                "Both ingredient_component and recipe_component cannot exist in the same FormulaMetadata object."
            )

        queryset = FormulaMetadata.objects.filter(
            formula=self.formula, ingredient_component=self.ingredient_component
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists() and self.ingredient_component is not None:
            raise ValidationError(
                "Combination of formula and ingredient_component already exists."
            )
        queryset = FormulaMetadata.objects.filter(
            formula=self.formula, recipe_component=self.recipe_component
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists() and self.recipe_component is not None:
            raise ValidationError(
                "Combination of formula and recipe_component already exists."
            )

    class Meta:
        unique_together = (
            ("formula", "ingredient_component"),
            ("formula", "recipe_component"),
        )

    def save(self, *args, **kwargs):
        total_percentage = (
            FormulaMetadata.objects.filter(formula=self.formula)
            .exclude(id=self.id)
            .aggregate(models.Sum("percentage"))["percentage__sum"]
        )
        if total_percentage is None:
            total_percentage = 0
        total_percentage += self.percentage
        if total_percentage == 100:
            super().save(*args, **kwargs)
        else:
            raise ValueError(
                "Sum of ingredient/recipe_component percentages for each formula must be 100%"
            )

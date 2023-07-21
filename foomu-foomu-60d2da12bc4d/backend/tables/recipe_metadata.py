from django.db import models
from django.core.exceptions import ValidationError
from .ingredient import Ingredient
from .formula import Formula
from .recipe import Recipe
from .functionality import Functionality


class RecipeMetadata(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    recipe = models.ForeignKey(Recipe, to_field="alias", on_delete=models.CASCADE)
    functionality = models.ForeignKey(
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
    formula_component = models.ForeignKey(
        Formula,
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
        if self.ingredient_component is None and self.formula_component is None:
            raise ValidationError(
                "Either ingredient/formula_component must be provided."
            )
        if self.ingredient_component and self.formula_component:
            raise ValidationError(
                "Both ingredient_component and formula_component cannot exist in the same RecipeMetadata object."
            )

        queryset = RecipeMetadata.objects.filter(
            recipe=self.recipe, ingredient_component=self.ingredient_component
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists() and self.ingredient_component is not None:
            raise ValidationError(
                "Combination of recipe and ingredient_component already exists."
            )
        queryset = RecipeMetadata.objects.filter(
            recipe=self.recipe, formula_component=self.formula_component
        )
        if self.pk is not None:
            queryset = queryset.exclude(pk=self.pk)
        if queryset.exists() and self.formula_component is not None:
            raise ValidationError(
                "Combination of recipe and formula_component already exists."
            )

    class Meta:
        unique_together = (
            ("recipe", "ingredient_component"),
            ("recipe", "formula_component"),
        )

    def save(self, *args, **kwargs):
        total_percentage = (
            RecipeMetadata.objects.filter(recipe=self.recipe)
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
                "Sum of ingredient/formula_component percentages for each recipe must be 100%"
            )

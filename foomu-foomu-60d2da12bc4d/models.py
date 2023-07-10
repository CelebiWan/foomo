
# Create your models here.
from django.db import models
from django.core.exceptions import ValidationError

class Ingredient(models.Model):
    ingredient_name = models.CharField(max_length=100)
    internal_id = models.IntegerField()
    cas_number = models.CharField(max_length=100)
    # Other fields as needed

    def __str__(self):
        return self.ingredient_name

class IndependentMaterialAttribute(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='')
    value = models.CharField(max_length=100, default='')
    attributes = models.JSONField(null=True, blank=True)
    file = models.FileField(upload_to='independent_files/', blank=True)
    image = models.ImageField(upload_to='independent_image/', blank=True) # Adjust the upload path as needed
    # Other fields as needed

    def __str__(self):
        return f"{self.ingredient.ingredient_name} - {self.name}"

class DependentMaterialAttribute(models.Model):
    ingredient1 = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='dependent_attributes1')
    ingredient2 = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='dependent_attributes2')
    name = models.CharField(max_length=100, default='')
    value = models.CharField(max_length=100, default='')
    attributes = models.JSONField(null=True, blank=True)
    file = models.FileField(upload_to='dependent_files/', blank=True)
    image = models.ImageField(upload_to='dependent_image/', blank=True) # Adjust the upload path as needed
    # Other fields as needed

    def __str__(self):
        return f"{self.ingredient1.ingredient_name} - {self.ingredient2.ingredient_name} - {self.name}"


class Functionality(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class IngredientPercentage(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    formula = models.ForeignKey('Formula', on_delete=models.CASCADE)
    percentage = models.DecimalField(max_digits=5, decimal_places=2)
    functionality = models.ForeignKey(Functionality, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.ingredient} - {self.formula}"

class Formula(models.Model):
    name = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True)
    # Other fields as needed

    def __str__(self):
        return self.name

    def clean(self):
        super().clean()
        total_percentage = sum(self.ingredientpercentage_set.all().values_list('percentage', flat=True))
        if total_percentage != 100:
            raise ValidationError("The total percentage of ingredients in the formula must be 100.")

class DosageType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ProcessParameter(models.Model):
    experiment_version = models.ForeignKey('ExperimentVersion', on_delete=models.CASCADE)
    process_name = models.CharField(max_length=100)
    process_value = models.CharField(max_length=100)
    # Other fields as needed

    def __str__(self):
        return self.process_name

class Equipment(models.Model):
    experiment_version = models.ForeignKey('ExperimentVersion', on_delete=models.CASCADE, related_name="equipments")
    equipment_name = models.CharField(max_length=100)
    equipment_value = models.CharField(max_length=100)
    # Other fields as needed

    def __str__(self):
        return self.equipment_name

class QuantitativeResult(models.Model):
    experiment_version = models.ForeignKey('ExperimentVersion', on_delete=models.CASCADE)
    result_name = models.CharField(max_length=100)
    result_value = models.CharField(max_length=100)
    # Other fields as needed

    def __str__(self):
        return self.result_name

class QualitativeResponse(models.Model):
    experiment_version = models.ForeignKey('ExperimentVersion', on_delete=models.CASCADE)
    response_name = models.CharField(max_length=100)
    response_note = models.TextField()
    # Other fields as needed

    def __str__(self):
        return self.response_name

class ExperimentVersion(models.Model):
    formula = models.ForeignKey(Formula, on_delete=models.CASCADE)
    dosage_type = models.ForeignKey(DosageType, on_delete=models.CASCADE)
    process_parameters = models.ManyToManyField(ProcessParameter)
    equipment = models.ManyToManyField(Equipment, related_name='experiment_versions')
    quantitative_results = models.ManyToManyField(QuantitativeResult)
    qualitative_responses = models.ManyToManyField(QualitativeResponse)
    created_date = models.DateTimeField(auto_now_add=True)
    # Other fields as needed

    def __str__(self):
        return f"Experiment Version: {self.id}"
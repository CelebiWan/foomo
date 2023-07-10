from django.contrib import admin
from .tables.ingredient import Ingredient
from .tables.property_type import PropertyType
from .tables.ingredient_property import IngredientProperty
from .tables.interaction_type import InteractionType
from .tables.interaction import Interaction
from .tables.functionality import Functionality
from .tables.recipe import Recipe
from .tables.recipe_metadata import RecipeMetadata
from .tables.formula import Formula
from .tables.formula_property import FormulaProperty
from .tables.formula_metadata import FormulaMetadata
from .tables.formula_type import FormulaType
from .tables.qualitative_type import QualitativeType
from .tables.qualitative_result import QualitativeResult
from .tables.quantitative_result import QuantitativeResult
from .tables.process import Process
from .tables.validation import Validation
from .tables.experiment import Experiment
from .tables.experiment_method import ExperimentMethod
from .tables.experiment_validation import ExperimentValidation

admin.site.register(Ingredient)
admin.site.register(PropertyType)
admin.site.register(IngredientProperty)
admin.site.register(InteractionType)
admin.site.register(Interaction)
admin.site.register(Functionality)
admin.site.register(Recipe)
admin.site.register(RecipeMetadata)
admin.site.register(FormulaType)
admin.site.register(Formula)
admin.site.register(FormulaProperty)
admin.site.register(FormulaMetadata)
admin.site.register(QualitativeType)
admin.site.register(QualitativeResult)
admin.site.register(QuantitativeResult)
admin.site.register(Process)
admin.site.register(Validation)
admin.site.register(Experiment)
admin.site.register(ExperimentMethod)
admin.site.register(ExperimentValidation)

from rest_framework import serializers
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

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class PropertyTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyType
        fields = '__all__'

class IngredientPropertySerializer(serializers.ModelSerializer):
    property_type = PropertyTypeSerializer(read_only=True)
    class Meta:
        model = IngredientProperty
        fields = '__all__'

class InteractionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractionType
        fields = '__all__'

class InteractionSerializer(serializers.ModelSerializer):
    interaction_type = InteractionTypeSerializer(read_only=True)
    class Meta:
        model = Interaction
        fields = '__all__'

class FunctionalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Functionality
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
        
class RecipeMetadataSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeMetadata
        fields = '__all__'

class FormulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formula
        fields = '__all__'

class FormulaPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = FormulaProperty
        fields = '__all__'

class FormulaMetadataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormulaMetadata
        fields = '__all__'

class FormulaTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormulaType
        fields = '__all__'

class QualitativeTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QualitativeType
        fields = '__all__'

class QualitativeResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = QualitativeResult
        fields = '__all__'

class QuantitativeResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuantitativeResult
        fields = '__all__'

class ProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Process
        fields = '__all__'

class ValidationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Validation
        fields = '__all__'

class ExperimentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = '__all__'

class ExperimentMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperimentMethod
        fields = '__all__'

class ExperimentValidationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperimentValidation
        fields = '__all__'
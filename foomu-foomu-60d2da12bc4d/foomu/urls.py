from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from backend.views import (
    IngredientViewSet,
    PropertyTypeViewSet,
    IngredientPropertyViewSet,
    IngredientPropertyDetailViewSet,
    InteractionTypeViewSet,
    InteractionViewSet,
    InteractionDetailViewSet,
    FunctionalityViewSet,
    RecipeViewSet,
    RecipeMetadataViewSet,
    FormulaViewSet,
    FormulaPropertyViewSet,
    FormulaMetadataViewSet,
    FormulaTypeViewSet,
    QualitativeTypeViewSet,
    QualitativeResultViewSet,
    QuantitativeResultViewSet,
    EquipmentViewSet,
    ProcessViewSet,
    ValidationViewSet,
    ExperimentViewSet,
    ExperimentMethodViewSet,
    ExperimentValidationViewSet,
)

router = routers.DefaultRouter()
router.register('ingredients', IngredientViewSet)
router.register('property-types', PropertyTypeViewSet)
router.register('ingredient-properties', IngredientPropertyViewSet)
router.register('interaction-types', InteractionTypeViewSet)
router.register('interactions', InteractionViewSet)
router.register('functionalities', FunctionalityViewSet)
router.register('recipes', RecipeViewSet)
router.register('recipe-metadata', RecipeMetadataViewSet)
router.register('formulas', FormulaViewSet)
router.register('formula-properties', FormulaPropertyViewSet)
router.register('formula-metadata', FormulaMetadataViewSet)
router.register('formula-types', FormulaTypeViewSet)
router.register('qualitative-types', QualitativeTypeViewSet)
router.register('qualitative-results', QualitativeResultViewSet)
router.register('quantitative-results', QuantitativeResultViewSet)
router.register('equipments', EquipmentViewSet)
router.register('processes', ProcessViewSet)
router.register('validations', ValidationViewSet)
router.register('experiments', ExperimentViewSet)
router.register('experiment-methods', ExperimentMethodViewSet)
router.register('experiment-validations', ExperimentValidationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/ingredient/<int:ingredient_id>/properties/', IngredientPropertyDetailViewSet.as_view({'get': 'list'}), name='ingredient-properties-detail'),
    path('api/ingredient/<int:ingredient_id>/interactions/', InteractionDetailViewSet.as_view({'get': 'list'}), name='ingredient-interactions-detail'),

]

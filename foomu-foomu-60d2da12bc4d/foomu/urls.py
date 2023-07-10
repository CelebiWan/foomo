"""
URL configuration for foomu project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
from django.urls import include, path
from rest_framework import routers
from backend.views import (
    IngredientViewSet,
    PropertyTypeViewSet,
    IngredientPropertyViewSet,
    InteractionTypeViewSet,
    InteractionViewSet,
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
router.register('processes', ProcessViewSet)
router.register('validations', ValidationViewSet)
router.register('experiments', ExperimentViewSet)
router.register('experiment-methods', ExperimentMethodViewSet)
router.register('experiment-validations', ExperimentValidationViewSet)

urlpatterns = [
    # Other URL patterns for your project
    path('api/', include(router.urls)),
]

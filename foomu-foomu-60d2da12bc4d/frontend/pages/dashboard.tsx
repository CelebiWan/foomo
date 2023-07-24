import React, { useState, useEffect } from 'react';
import DBDashboard from '../src/components/Dashboard/DBDashboard';

function DataEntryPage() {
  const [currentEntity, setCurrentEntity] = useState<string | null>(null);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [selectedTable, setSelectedTable] = useState<'IngredientProperties' | 'Interactions' | 'RecipeMetadata' | null>(null);
  const [ingredientProperties, setIngredientProperties] = useState<any[]>([]);
  const [interactions, setInteractions] = useState<any[]>([]);
  const [recipeMetadata, setRecipeMetadata] = useState<any[]>([]);


  const handleNavClick = (entity: string) => {
    switch (entity) {
      case 'Ingredient':
        setCurrentEntity(entity);
        setSelectedTable(null); // Reset selected ingredient when switching entities
        break;
      case 'Property Type':
        setCurrentEntity(entity);
        break;
      case 'Ingredient Property':
        setCurrentEntity(entity);
        break;
      case 'Interaction':
        setCurrentEntity(entity);
        break;
      case 'Interaction Type':
        setCurrentEntity(entity);
        break;
      case 'Recipe':
        setCurrentEntity(entity);
        break;
      case 'Recipe Metadata':
        setCurrentEntity(entity);
        break;
      case 'Formula':
        setCurrentEntity(entity);
        break;
      case 'Formula Type':
        setCurrentEntity(entity);
        break;
      case 'Formula Property':
        setCurrentEntity(entity);
        break;
      case 'Equipment':
        setCurrentEntity(entity);
        break;
      case 'Process':
        setCurrentEntity(entity);
        break;
      case 'Validation':
        setCurrentEntity(entity);
        break;
      case 'Experiment':
        setCurrentEntity(entity);
        break;
      case 'Qualitative Type':
        setCurrentEntity(entity);
        break;
      case 'Qualitative Result':
        setCurrentEntity(entity);
        break;
      case 'Quantitative Result':
        setCurrentEntity(entity);
        break;
      default:
        console.log('Unhandled entity: ', entity);
    }
  };



const handleIngredientPropertiesClick = (ingredient: string) => {
    setSelectedTable('IngredientProperties');
    fetchIngredientProperties(ingredient);
    
};

const handleIngredientInteractionsClick = (ingredient: string) => {
    setSelectedTable('Interactions');
    fetchInteractions(ingredient);
    
};

const handleRecipeMetadataClick = (recipe: string) => {
  setSelectedTable('RecipeMetadata');
  fetchRecipeMetadata(recipe);
};


  const fetchIngredientProperties = async (ingredient: string) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/ingredient/${ingredient}/properties/`
      );
      if (!response.ok) {
        console.error('Failed to fetch ingredient properties');
        setIngredientProperties([]);
      } else {
        const data = await response.json();
        console.log('ingredient properties:', data);
        setIngredientProperties(data);
      }
    } catch (error) {
      console.error('Error fetching ingredient properties: ', error);
      setIngredientProperties([]);
    }
  };
const fetchInteractions = async (ingredient: string) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/ingredient/${ingredient}/interactions/`
      );
      if (!response.ok) {
        console.error('Failed to fetch interactions');
        setInteractions([]);
      } else {
        const data = await response.json();
        console.log('interactions:', data);
        setInteractions(data);
      }
    } catch (error) {
      console.error('Error fetching interactions: ', error);
      setInteractions([]);
    }
  };
  const fetchRecipeMetadata = async (recipe: string) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/recipe/${recipe}/metadata/`
      );
      if (!response.ok) {
        console.error('Failed to fetch recipe metadata');
        setRecipeMetadata([]);
      } else {
        const data = await response.json();
        console.log('recipe metadata:', data);
        setRecipeMetadata(data);
      }
    } catch (error) {
      console.error('Error fetching recipe metadata: ', error);
      setRecipeMetadata([]);
    }
  };

  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      let url;
      switch (currentEntity) {
        case 'Ingredient':
          url = 'http://127.0.0.1:8000/api/ingredients/';
          break;
        case 'Property Type':
          url = 'http://127.0.0.1:8000/api/property-types/';
          break;
        case 'Ingredient Property':
          url = 'http://127.0.0.1:8000/api/ingredient-properties/';
          break;
        case 'Interaction':
          url = 'http://127.0.0.1:8000/api/interactions/';
          break;
        case 'Interaction Type':
          url = 'http://127.0.0.1:8000/api/interaction-types/';
          break;
        case 'Recipe':
          url = 'http://127.0.0.1:8000/api/recipes/';
          break;
        case 'Recipe Metadata':
          url = 'http://127.0.0.1:8000/api/recipe-metadata/';
          break;
        case 'Formula':
          url = 'http://127.0.0.1:8000/api/formulas/';
          break;
        case 'Formula Type':
          url = 'http://127.0.0.1:8000/api/formula-types/';
          break;
        case 'Formula Property':
          url = 'http://127.0.0.1:8000/api/formula-properties/';
          break;
        case 'Equipment':
          url = 'http://127.0.0.1:8000/api/equipments/';
          break;
        case 'Process':
          url = 'http://127.0.0.1:8000/api/processes/';
          break;
        case 'Validation':
          url = 'http://127.0.0.1:8000/api/validations/';
          break;
        case 'Experiment':
          url = 'http://127.0.0.1:8000/api/experiments/';
          break;
        case 'Qualitative Type':
          url = 'http://127.0.0.1:8000/api/qualitative-types/';
          break;
        case 'Qualitative result':
          url = 'http://127.0.0.1:8000/api/qualitative-results/';
          break;
        case 'Quantitative result':
          url = 'http://127.0.0.1:8000/api/quantitative-results/';
          break;
        default:
          url = '';
      }

      if (url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            console.error('Failed to fetch data');
            setCurrentData([]);
          } else {
            const data = await response.json();
            console.log('data:', data);
            setCurrentData(data);
          }
        } catch (error) {
          console.error('Error fetching data: ', error);
          setCurrentData([]);
        }
      }
    };

    fetchData();
  }, [currentEntity]);

  return (
    <DBDashboard
      currentEntity={currentEntity}
      currentData={currentData}
      selectedTable={selectedTable}
      handleIngredientPropertiesClick={handleIngredientPropertiesClick}
      handleIngredientInteractionsClick={handleIngredientInteractionsClick}
      ingredientProperties={ingredientProperties}
      interactions={interactions}
      handleRecipeMetadataClick={handleRecipeMetadataClick}
      recipeMetadata={recipeMetadata}
      handleNavClick={handleNavClick}
    />
  );
}

export default DataEntryPage;
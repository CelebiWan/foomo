import React, { useState, useEffect } from 'react';
import DBDashboard from '../src/components/Dashboard/DBDashboard';

function DataEntryPage() {
  const [currentEntity, setCurrentEntity] = useState<string | null>(null);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [ingredientProperties, setIngredientProperties] = useState<any[]>([]);
  const [interactions, setInteractions] = useState<any[]>([]);
  const [showPropertiesTable, setShowPropertiesTable] = useState<boolean>(false);
  const [showInteractionsTable, setShowInteractionsTable] = useState<boolean>(false);

  const handleNavClickIngredientTable = (entity: string) => {
    setCurrentEntity(entity);
    setSelectedIngredient(null); // Reset selected ingredient when switching entities
  };

  const handleNavClickPropertyTypeTable = (entity: string) => {
    setCurrentEntity(entity);
    setSelectedIngredient(null); // Reset selected ingredient when switching entities
  };

  const handleNavClickIngredientPropertiesTable = (entity: string) => {
    setCurrentEntity(entity);
    setSelectedIngredient(null); // Reset selected ingredient when switching entities
  };

  // For Properties Table
const showProperties = () => {
  setShowPropertiesTable(true);
};

const hideProperties = () => {
  setShowPropertiesTable(false);
};

// For Interactions Table
const showInteractions = () => {
  setShowInteractionsTable(true);
};

const hideInteractions = () => {
  setShowInteractionsTable(false);
};

  const handleIngredientPropertiesClick = (ingredient: string) => {
    setSelectedIngredient(ingredient);
    fetchIngredientProperties(ingredient);
    showProperties();
};

const handleIngredientInteractionsClick = (ingredient: string) => {
    setSelectedIngredient(ingredient);
    fetchInteractions(ingredient);
    showInteractions(); 
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
      handleIngredientPropertiesClick={handleIngredientPropertiesClick}
      handleIngredientInteractionsClick={handleIngredientInteractionsClick}
      ingredientProperties={ingredientProperties}
      interactions={interactions}
      showPropertiesTable={showPropertiesTable}
      showInteractionsTable={showInteractionsTable}
      handleNavClickIngredientTable={handleNavClickIngredientTable}
      handleNavClickPropertyTypeTable={handleNavClickPropertyTypeTable}
      handleNavClickIngredientPropertiesTable={handleNavClickIngredientPropertiesTable}
    />
  );
}

export default DataEntryPage;
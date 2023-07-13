import React, { useState, useEffect } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import SidebarContent from '../src/components/Navigation/SideBar'; 
import IngredientTable from '../src/components/Tables/IngredientTable';
import IngredientPropertiesTable from '../src/components/Tables/IngredientPropertiesTable';

function DataEntryPage() {
  const [currentEntity, setCurrentEntity] = useState<string | null>(null);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [ingredientProperties, setIngredientProperties] = useState<any[]>([]);

  const handleNavClickTable = (entity: string) => {
    setCurrentEntity(entity);
  };

  const handleIngredientClick = (ingredient: string) => {
    setSelectedIngredient(ingredient);
    fetchIngredientProperties(ingredient);
  };

  const fetchIngredientProperties = async (ingredient: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/ingredient-properties/${ingredient}`);
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

  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      let url;
      switch (currentEntity) {
        case 'Ingredient':
          url = 'http://127.0.0.1:8000/api/ingredients/';
          break;
        case 'Property Type':
          url = 'http://127.0.0.1:8000/api/property-type/';
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
    <Grid templateColumns="1fr 1fr" gap={4}>
      <Box>
        <SidebarContent handleNavClickTable={handleNavClickTable} handleIngredientClick={handleIngredientClick} />
      </Box>
      <Box>
        <Flex direction="column" height="100vh" overflow="auto">
          <Box p={5}>
            {currentEntity === 'Ingredient' && <IngredientTable data={currentData} handleIngredientClick={handleIngredientClick} />}
          </Box>
          <Box p={5}>
            {selectedIngredient && <IngredientPropertiesTable data={ingredientProperties} />}
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
}

export default DataEntryPage;

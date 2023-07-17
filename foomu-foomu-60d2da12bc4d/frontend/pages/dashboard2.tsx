import React, { useState, useEffect } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import SidebarContent from '../src/components/Navigation/SideBar';
import IngredientTable from '../src/components/Tables/IngredientTable';
import IngredientPropertiesTable from '../src/components/Tables/IngredientPropertiesTable';
import InteractionTable from '../src/components/Tables/InteractionTable';

function DataEntryPage() {
  const [currentEntity, setCurrentEntity] = useState<string | null>(null);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [ingredientProperties, setIngredientProperties] = useState<any[]>([]);
  const [interactions, setInteractions] = useState<any[]>([])

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

  const handleIngredientClick = (ingredient: string) => {
    setSelectedIngredient(ingredient);
    fetchIngredientProperties(ingredient);
    fetchInteractions(ingredient);
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
    <Grid templateColumns="0.5fr 3fr" gap={4}>
      <Box>
        <SidebarContent
          handleNavClickIngredientTable={handleNavClickIngredientTable}
          handleNavClickPropertyTypeTable={handleNavClickPropertyTypeTable}
          handleNavClickIngredientPropertiesTable={handleNavClickIngredientPropertiesTable}
        />
      </Box>
      <Flex direction="column" height="100vh" overflow="auto">
        <Box p={5}>
          {currentEntity === 'Ingredient' && (
            <IngredientTable
              data={currentData}
              handleIngredientClick={handleIngredientClick}
            />
          )}
        </Box>
        {currentEntity === 'Ingredient Properties' && <IngredientPropertiesTable data={currentData} />}
      </Flex>
    </Grid>
  );
}

export default DataEntryPage;

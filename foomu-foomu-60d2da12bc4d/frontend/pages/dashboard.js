import React from 'react';
import { Box } from '@chakra-ui/react';
import IngredientForm from '../src/components/Forms/IngredientForm';
import PropertyTypeForm from '../src/components/Forms/PropertyTypeForm';
import IngredientPropertyForm from '../src/components/Forms/IngredientPropertyForm';
import SidebarWithHeader from '../src/components/Navigation/SideBar';

function DataEntryPage() {
  const [currentEntity, setCurrentEntity] = React.useState(null);
  const [ingredientData, setIngredientData] = React.useState([]);
  const [propertyTypeData, setPropertyTypeData] = React.useState([]);
  const [ingredientPropertiesData, setIngredientPropertiesData] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/ingredients')
      .then(res => res.json())
      .then(setIngredientData);

    fetch('/api/property-types')
      .then(res => res.json())
      .then(setPropertyTypeData);

    fetch('/api/ingredient-properties')
      .then(res => res.json())
      .then(setIngredientPropertiesData);
  }, []);

  const handleButtonClick = (entity) => {
    setCurrentEntity(entity);
  };

  return (
    <SidebarWithHeader>
      <Box p={5} w="100%" h="100vh" overflow="auto"> {/* Adding height and overflow properties */}
        {/* Assuming you will have some sort of navigation buttons to select entity. */}
        {/* Button to select 'Ingredient' */}
        <button onClick={() => handleButtonClick('Ingredient')}>Ingredient</button>
        {/* Button to select 'Property Type' */}
        <button onClick={() => handleButtonClick('Property Type')}>Property Type</button>
        {/* Button to select 'Ingredient Properties' */}
        <button onClick={() => handleButtonClick('Ingredient Properties')}>Ingredient Properties</button>

        {currentEntity === 'Ingredient' && (
          <>
            <IngredientForm />
            <YourTableComponent data={ingredientData} /> {/* Replace YourTableComponent with your actual table component */}
          </>
        )}

        {currentEntity === 'Property Type' && (
          <>
            <PropertyTypeForm />
            <YourTableComponent data={propertyTypeData} /> {/* Replace YourTableComponent with your actual table component */}
          </>
        )}

        {currentEntity === 'Ingredient Properties' && (
          <>
            <IngredientPropertyForm />
            <YourTableComponent data={ingredientPropertiesData} /> {/* Replace YourTableComponent with your actual table component */}
          </>
        )}
      </Box>
    </SidebarWithHeader>
  );
}

export default DataEntryPage;

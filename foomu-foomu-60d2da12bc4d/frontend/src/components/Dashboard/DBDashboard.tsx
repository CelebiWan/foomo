// DBDashboard component
import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import SidebarContent from '../Navigation/SideBar';
import IngredientTable from '../Tables/IngredientTable';
import PropertyTypeTable from '../Tables/PropertyTypesTable';
import IngredientPropertiesTable from '../Tables/IngredientPropertiesTable';
import InteractionTable from '../Tables/InteractionTable';
import RecipeTable from '../Tables/RecipeTable';
import RecipeMetadataTable from '../Tables/RecipeMetadataTable';

interface DBDashboardProps {
  currentEntity: string | null;
  currentData: any[];
  handleIngredientPropertiesClick: (ingredient: string) => void;
  handleIngredientInteractionsClick: (ingredient: string) => void;
  ingredientProperties: any[];
  interactions: any[];
  selectedTable:'IngredientProperties' | 'Interactions' | 'RecipeMetadata'| null;
  recipeMetadata: any[];
  handleRecipeMetadataClick: (recipe: string) => void;
  handleNavClick: (entity: string) => void;
}

const DBDashboard: React.FC<DBDashboardProps> = ({
  currentEntity,
  currentData,
  handleIngredientPropertiesClick,
  handleIngredientInteractionsClick,
  ingredientProperties,
  interactions,
  selectedTable,
  handleRecipeMetadataClick,
  recipeMetadata,
  handleNavClick
}) => {
  return (
    <Grid templateColumns="0.5fr 3fr" gap={4}>
      <Box>
        <SidebarContent handleNavClick={handleNavClick} />
      </Box>
      <Flex direction="column" height="100vh" overflow="auto">
        <Box p={5}>
          {currentEntity === 'Ingredient' && (
            <IngredientTable
              data={currentData}
              handleIngredientPropertiesClick={handleIngredientPropertiesClick}
              handleIngredientInteractionsClick={handleIngredientInteractionsClick}
            />
          )}
          {currentEntity === 'Recipe' && (
            <RecipeTable
              data={currentData}
              handleRecipeMetadataClick={handleRecipeMetadataClick}
            />
          )}
        </Box>
        {selectedTable === 'IngredientProperties' && (
          <Box p={5}>
            <IngredientPropertiesTable data={ingredientProperties}/>
          </Box>
        )}
        {selectedTable === 'Interactions' && (
          <Box p={5}>
            <InteractionTable data={interactions} />
          </Box>
        )}
        {selectedTable === 'RecipeMetadata' && (
          <Box p={5}>
            <RecipeMetadataTable data={recipeMetadata} />
          </Box>
        )}
        {currentEntity === 'Property Type' && <PropertyTypeTable data={currentData} />}
        {currentEntity === 'Ingredient Property' && <IngredientPropertiesTable data={currentData} />}
        {currentEntity === 'Interaction' && <InteractionTable data={currentData} />}
        {currentEntity === 'Recipe Metadata' && <RecipeMetadataTable data={currentData} />}
      </Flex>
    </Grid>
  );
};

export default DBDashboard;
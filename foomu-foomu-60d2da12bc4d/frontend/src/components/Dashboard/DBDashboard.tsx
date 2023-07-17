import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import SidebarContent from '../Navigation/SideBar';
import IngredientTable from '../Tables/IngredientTable';
import IngredientPropertiesTable from '../Tables/IngredientPropertiesTable';
import InteractionTable from '../Tables/InteractionTable';

interface DBDashboardProps {
  currentEntity: string | null;
  currentData: any[];
  handleIngredientPropertiesClick: (ingredient: string) => void;
  handleIngredientInteractionsClick: (ingredient: string) => void;
  ingredientProperties: any[];
  interactions: any[];
  showPropertiesTable: boolean;
  showInteractionsTable: boolean;
  handleNavClickIngredientTable: (entity: string) => void;
  handleNavClickPropertyTypeTable: (entity: string) => void;
  handleNavClickIngredientPropertiesTable: (entity: string) => void;
}

const DBDashboard: React.FC<DBDashboardProps> = ({
  currentEntity,
  currentData,
  handleIngredientPropertiesClick,
  handleIngredientInteractionsClick,
  ingredientProperties,
  interactions,
  showPropertiesTable,
  showInteractionsTable,
  handleNavClickIngredientTable,
  handleNavClickPropertyTypeTable,
  handleNavClickIngredientPropertiesTable
}) => {
    console.log('interactions:', interactions);
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
              handleIngredientPropertiesClick={handleIngredientPropertiesClick}
              handleIngredientInteractionsClick={handleIngredientInteractionsClick}
            />
          )}
        </Box>
        {showPropertiesTable && (
          <Box p={5}>
            <IngredientPropertiesTable data={ingredientProperties}/>
          </Box>
        )}
        {showInteractionsTable && (
          <Box p={5}>
            <InteractionTable data={interactions} />
          </Box>
        )}
      </Flex>
    </Grid>
  );
};

export default DBDashboard;

// DBDashboard component
import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import SidebarContent from '../Navigation/SideBar';
import IngredientTable from '../Tables/IngredientTable';
import PropertyTypeTable from '../Tables/PropertyTypesTable';
import IngredientPropertiesTable from '../Tables/IngredientPropertiesTable';
import InteractionTable from '../Tables/InteractionTable';
import InteractionTypeTable from '../Tables/InteractionTypesTable';
import RecipeTable from '../Tables/RecipeTable';
import RecipeMetadataTable from '../Tables/RecipeMetadataTable';
import FormulaTable from '../Tables/FormulaTable';
import FormulaTypeTable from '../Tables/FormulaTypesTable';
import FormulaPropertiesTable from '../Tables/FormulaPropertiesTable';
import EquipmentTable from '../Tables/EquipmentsTable';
import ProcessTable from '../Tables/ProcessesTable';
import ValidationTable from '../Tables/ValidationsTable';
import QualitativeTypeTable from '../Tables/QualitativeTypesTable';
import ExperimentTable from '../Tables/ExperimentsTable';
import QualitativeResultTable from '../Tables/QualitativeResultsTable';
import QuantitativeResultTable from '../Tables/QuantitativeResultsTable';

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
        {currentEntity === 'Interaction Type' && <InteractionTypeTable data={currentData} />}
        {currentEntity === 'Recipe Metadata' && <RecipeMetadataTable data={currentData} />}
        {currentEntity === 'Formula' && <FormulaTable data={currentData} />}
        {currentEntity === 'Formula Type' && <FormulaTypeTable data={currentData} />}
        {currentEntity === 'Formula Property' && <FormulaPropertiesTable data={currentData} />}
        {currentEntity === 'Equipment' && <EquipmentTable data={currentData} />}
        {currentEntity === 'Process' && <ProcessTable data={currentData} />}
        {currentEntity === 'Validation' && <ValidationTable data={currentData} />}
        {currentEntity === 'Experiment' && <ExperimentTable data={currentData} />}
        {currentEntity === 'Qualitative Type' && <QualitativeTypeTable data={currentData} />}
        {currentEntity === 'Qualitative Result' && <QualitativeResultTable data={currentData} />}
        {currentEntity === 'Quantitative Result' && <QuantitativeResultTable data={currentData} />}
      </Flex>
    </Grid>
  );
};

export default DBDashboard;
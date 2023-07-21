import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface RecipeMetadata {
    id: number;
    recipe: string;  
    functionality: string; 
    ingredient_component: string; 
    formula_component: string; 
    percentage: number;
}

interface TableProps {
  data: RecipeMetadata[];
  handleRecipeMetadataClick: (recipe: string) => void; 
}

const RecipeMetadataTable: FC<TableProps> = ({ data, handleRecipeMetadataClick }) => {
  console.log('selectedTable:', handleRecipeMetadataClick);
  console.log('data:', data);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <ChakraTable variant="striped">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Recipe</Th>
          <Th>Functionality</Th>
          <Th>Ingredient Component</Th>
          <Th>Formula Component</Th>
          <Th>Percentage</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((rm: RecipeMetadata) => (
          <Tr key={rm.id}>
            <Td>{rm.id}</Td>
            <Td>{rm.recipe}</Td>
            <Td>{rm.functionality}</Td>
            <Td>{rm.ingredient_component}</Td>
            <Td>{rm.formula_component}</Td>
            <Td>{rm.percentage}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};
export default RecipeMetadataTable;
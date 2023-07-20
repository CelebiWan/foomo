import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface Recipe {
    id: number;
    alias: string;
    name: string;
}

interface TableProps {
  data: Recipe[];
  handleViewMetadataClick: (recipeId: number) => void; 
}

const RecipeTable: FC<TableProps> = ({ data, handleViewMetadataClick }) => {
  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <ChakraTable variant="striped">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Alias</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((recipe: Recipe) => (
          <Tr key={recipe.id}>
            <Td>{recipe.id}</Td>
            <Td>{recipe.alias}</Td>
            <Td>{recipe.name}</Td>
            <Td>
              <Button size="sm" onClick={() => handleViewMetadataClick(recipe.id)}>
                View Metadata
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default RecipeTable;

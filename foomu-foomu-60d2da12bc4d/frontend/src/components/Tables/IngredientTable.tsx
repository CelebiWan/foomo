import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface Ingredient {
  id: number;
  alias: string;
  name: string;
  cas_number: string;
}

interface TableProps {
  data: Ingredient[];
  selectedTable: string | null;
}

const IngredientTable: FC<TableProps> = ({ data, selectedTable }) => {
  console.log('selectedTable:', selectedTable);
  console.log('data:', data);

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
          <Th>CAS Number</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((ingredient: Ingredient) => (
          <Tr key={ingredient.id}>
            <Td>{ingredient.id}</Td>
            <Td>{ingredient.alias}</Td>
            <Td>{ingredient.name}</Td>
            <Td>{ingredient.cas_number}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default IngredientTable;

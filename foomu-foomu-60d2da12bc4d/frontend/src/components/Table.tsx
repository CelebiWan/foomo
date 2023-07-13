import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface Ingredient {
  id: string;
  alias: string;
  name: string;
  cas_number: string;
}

interface TableProps {
  data: Ingredient[];
  selectedTable: string | null;
}

const Table: FC<TableProps> = ({ data, selectedTable }) => {
  console.log('selectedTable:', selectedTable);
  // data = [{ id: '1', alias: 'alias', name: 'name', cas_number: '1' }]
  console.log('data:', data);

  // if (!selectedTable) {
  //   return <p>Select a table to display data</p>;
  // }

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

export default Table;

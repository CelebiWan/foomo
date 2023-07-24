import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface InteractionType {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: InteractionType[];
  selectedTable: string | null;
}

const InteractionTypeTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        </Tr>
      </Thead>
      <Tbody>
        {data.map((InteractionType: InteractionType) => (
          <Tr key={InteractionType.id}>
            <Td>{InteractionType.id}</Td>
            <Td>{InteractionType.alias}</Td>
            <Td>{InteractionType.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default InteractionTypeTable;

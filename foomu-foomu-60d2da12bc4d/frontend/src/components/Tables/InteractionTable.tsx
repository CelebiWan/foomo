import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface InteractionType {
  id: number;
  alias: string;
  name: string;
  // include other fields if you have any in the InteractionType model
}

interface Ingredient {
  id: number;
  alias: string;
  name: string;
  // include other fields if you have any in the Ingredient model
}

interface Interaction {
  id: number;
  ingredient1: string;
  ingredient2: string;
  interaction_type: string;
  value: number | null;
  boolean: boolean | null;s
  comment: string | null;
}

interface TableProps {
  data: Interaction[];
  selectedTable: string | null;
}

const InteractionTable: FC<TableProps> = ({ data, selectedTable }) => {
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
          <Th>Ingredient 1</Th>
          <Th>Ingredient 2</Th>
          <Th>Interaction Type</Th>
          <Th>Value</Th>
          <Th>Boolean</Th>
          <Th>Comment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((interaction: Interaction) => (
          <Tr key={interaction.id}>
            <Td>{interaction.id}</Td>
            <Td>{interaction.ingredient1}</Td>
            <Td>{interaction.ingredient2}</Td>
            <Td>{interaction.interaction_type}</Td>
            <Td>{interaction.value}</Td>
            <Td>{interaction.boolean}</Td>
            <Td>{interaction.comment}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default InteractionTable;

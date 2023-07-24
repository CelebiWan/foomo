import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface Formula {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: Formula[];
  selectedTable: string | null;
}

const FormulaTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        {data.map((Formula: Formula) => (
          <Tr key={Formula.id}>
            <Td>{Formula.id}</Td>
            <Td>{Formula.alias}</Td>
            <Td>{Formula.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default FormulaTable;

import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface Process {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: Process[];
  selectedTable: string | null;
}

const ProcessTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        {data.map((Process: Process) => (
          <Tr key={Process.id}>
            <Td>{Process.id}</Td>
            <Td>{Process.alias}</Td>
            <Td>{Process.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default ProcessTable;

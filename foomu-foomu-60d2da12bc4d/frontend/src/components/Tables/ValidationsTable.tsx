import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface Validation {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: Validation[];
  selectedTable: string | null;
}

const ValidationTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        {data.map((Validation: Validation) => (
          <Tr key={Validation.id}>
            <Td>{Validation.id}</Td>
            <Td>{Validation.alias}</Td>
            <Td>{Validation.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default ValidationTable;

import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface Equipment {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: Equipment[];
  selectedTable: string | null;
}

const EquipmentTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        {data.map((Equipment: Equipment) => (
          <Tr key={Equipment.id}>
            <Td>{Equipment.id}</Td>
            <Td>{Equipment.alias}</Td>
            <Td>{Equipment.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default EquipmentTable;

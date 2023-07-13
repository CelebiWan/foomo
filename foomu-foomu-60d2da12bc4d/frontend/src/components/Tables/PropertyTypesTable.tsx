import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface PropertyType {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: PropertyType[];
  selectedTable: string | null;
}

const PropertyTypeTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        {data.map((PropertyType: PropertyType) => (
          <Tr key={PropertyType.id}>
            <Td>{PropertyType.id}</Td>
            <Td>{PropertyType.alias}</Td>
            <Td>{PropertyType.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default PropertyTypeTable;

import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface QualitativeType {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: QualitativeType[];
  selectedTable: string | null;
}

const QualitativeTypeTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        {data.map((QualitativeType: QualitativeType) => (
          <Tr key={QualitativeType.id}>
            <Td>{QualitativeType.id}</Td>
            <Td>{QualitativeType.alias}</Td>
            <Td>{QualitativeType.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default QualitativeTypeTable;

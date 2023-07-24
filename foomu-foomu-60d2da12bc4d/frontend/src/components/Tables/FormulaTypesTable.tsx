import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface FormulaType {
  id: number;
  alias: string;
  name: string;
}

interface TableProps {
  data: FormulaType[];
  selectedTable: string | null;
}

const FormulaTypeTable: FC<TableProps> = ({ data, selectedTable }) => {
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
        {data.map((FormulaType: FormulaType) => (
          <Tr key={FormulaType.id}>
            <Td>{FormulaType.id}</Td>
            <Td>{FormulaType.alias}</Td>
            <Td>{FormulaType.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default FormulaTypeTable;

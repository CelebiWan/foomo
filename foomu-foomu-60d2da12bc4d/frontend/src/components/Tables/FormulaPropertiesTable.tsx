import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface FormulaProperties {
  id: number;
  Formula_id: string;
  property_type: string;
  value: number | null;
  boolean: boolean | null;
  comment: string | null;
}

interface TableProps {
  data: FormulaProperties[];
  selectedTable: string | null;
}

const FormulaPropertiesTable: FC<TableProps> = ({ data, selectedTable }) => {
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
          <Th>Formula Name</Th>
          <Th>Property Type</Th>
          <Th>Value</Th>
          <Th>Boolean</Th>
          <Th>Comment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((fp: FormulaProperties) => (
          <Tr key={fp.id}>
            <Td>{fp.id}</Td>
            <Td>{fp.Formula_id}</Td>
            <Td>{fp.property_type}</Td>
            <Td>{fp.value}</Td>
            <Td>{fp.boolean}</Td>
            <Td>{fp.comment}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default FormulaPropertiesTable;

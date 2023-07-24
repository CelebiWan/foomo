import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface QuantitativeResult {
  id: number;
  experiment: string;
  property_type: string;
  value: number | null;
  boolean: boolean | null;
  comment: string | null;
}

interface TableProps {
  data: QuantitativeResult[];
  selectedTable: string | null;
}

const QuantitativeResultTable: FC<TableProps> = ({ data, selectedTable }) => {
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
          <Th>Experiment</Th>
          <Th>Property Type</Th>
          <Th>Value</Th>
          <Th>Boolean</Th>
          <Th>Comment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((qualire: QuantitativeResult) => (
          <Tr key={qualire.id}>
            <Td>{qualire.id}</Td>
            <Td>{qualire.experiment}</Td>
            <Td>{qualire.property_type}</Td>
            <Td>{qualire.value}</Td>
            <Td>{qualire.boolean}</Td>
            <Td>{qualire.comment}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default QuantitativeResultTable;

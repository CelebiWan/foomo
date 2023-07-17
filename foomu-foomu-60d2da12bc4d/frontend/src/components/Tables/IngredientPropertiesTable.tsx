import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface PropertyType {
  id: number;
  alias: string;
  name: string;
  // include other fields if you have any in the PropertyType model
}

interface Ingredient {
  id: number;
  alias: string;
  name: string;
  cas_number: string;
}
interface IngredientProperties {
  id: number;
  ingredient_id: Ingredient;
  property_type: PropertyType;
  value: number | null;
  boolean: boolean | null;
  comment: string | null;
}

interface TableProps {
  data: IngredientProperties[];
  selectedTable: string | null;
}

const IngredientPropertiesTable: FC<TableProps> = ({ data, selectedTable }) => {
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
          <Th>Ingredient Name</Th>
          <Th>Property Type</Th>
          <Th>Value</Th>
          <Th>Boolean</Th>
          <Th>Comment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((ip: IngredientProperties) => (
          <Tr key={ip.id}>
            <Td>{ip.id}</Td>
            <Td>{ip.ingredient_id.name}</Td>
            <Td>{ip.property_type.name}</Td>
            <Td>{ip.value}</Td>
            <Td>{ip.boolean}</Td>
            <Td>{ip.comment}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default IngredientPropertiesTable;

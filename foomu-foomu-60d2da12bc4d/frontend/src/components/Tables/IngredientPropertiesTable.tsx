import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

interface PropertyType {
  id: number;
  alias: string;
  name: string;
  // include other fields if you have any in the PropertyType model
}
interface IngredientProperties {
  id: number;
  ingredient_id: number;
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
          <Th>Ingredient ID</Th>
          <Th>Property Type</Th>
          <Th>Value</Th>
          <Th>Boolean</Th>
          <Th>Comment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((property: IngredientProperties) => (
          <Tr key={property.id}>
            <Td>{property.id}</Td>
            <Td>{property.ingredient_id}</Td>
            <Td>{property.property_type.name}</Td>
            <Td>{property.value}</Td>
            <Td>{property.boolean}</Td>
            <Td>{property.comment}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default IngredientPropertiesTable;

import React, { FC } from 'react';
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface Experiment {
    id: number;
    name: string;
    recipe: string;
    formula_type: string;
  }
  
  interface TableProps {
    data: Experiment[];
    selectedTable: string | null;
  }
  
  const ExperimentTable: FC<TableProps> = ({ data, selectedTable }) => {
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
            <Th>Name</Th>
            <Th>Recipe</Th>
            <Th>Formula Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((Experiment: Experiment) => (
            <Tr key={Experiment.id}>
              <Td>{Experiment.id}</Td>
              <Td>{Experiment.name}</Td>
              <Td>{Experiment.recipe}</Td>
              <Td>{Experiment.formula_type}</Td>

            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    );
  };
  
  export default ExperimentTable;
  
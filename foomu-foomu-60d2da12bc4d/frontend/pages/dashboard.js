import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import IngredientForm from '../src/components/Forms/IngredientForm';
import PropertyTypeForm from '../src/components/Forms/PropertyTypeForm';
import IngredientPropertyForm from '../src/components/Forms/IngredientPropertyForm';
import SidebarWithHeader from '../src/components/Navigation/SideBar';

const DataDisplayTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data to display.</p>;
  }

  const headers = Object.keys(data[0]); // Get headers from first object

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            {headers.map((header, index) => (
              <Td key={index}>{row[header]}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
function DataEntryPage() {
  const [currentEntity, setCurrentEntity] = useState(null);
  const [currentData, setCurrentData] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);

  // const handleButtonClick = (entity) => {
  //   setCurrentEntity(entity);
  // };

  const handleNavClick = async (entity) => {
    setCurrentEntity(entity);
    // fetch data from your backend based on the entity
    let url;
    switch (entity) {
      case 'Ingredient':
        url = 'http://127.0.0.1:8000/api/ingredients/';
        break;
      case 'Property Type':
        url = 'http://localhost:8000/api/property-types';
        break;
      case 'Ingredient Properties':
        url = 'http://localhost:8000/api/ingredient-properties';
        break;
      default:
        url = '';
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCurrentData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  


  return (
    <SidebarWithHeader handleNavClick={handleNavClick}>
      <Box p={5} w="100%" h="100vh" overflow="auto">
        <DataDisplayTable data={currentData} />
      </Box>
    </SidebarWithHeader>
  );
}


export default DataEntryPage;


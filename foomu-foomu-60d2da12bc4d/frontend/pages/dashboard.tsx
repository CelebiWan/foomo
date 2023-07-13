import React, { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SidebarContent from '../src/components/Navigation/SideBar'; 
import Table from '../src/components/Table';
import { useRouter } from 'next/router';

function DataEntryPage() {
  const router = useRouter();
  const [currentEntity, setCurrentEntity] = useState<string | null>(null);
  const [currentData, setCurrentData] = useState<any[]>([]);

  const handleNavClickTable = (entity: string) => {
    setCurrentEntity(entity);
  };

  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      let url;
      switch (currentEntity) {
        case 'Ingredient':
          url = 'http://127.0.0.1:8000/api/ingredients/';
          break;
        case 'Property Type':
          url = 'http://127.0.0.1:8000/api/property-type/';
          break;
        case 'Ingredient Properties':
          url = 'http://127.0.0.1:8000/api/ingredient-properties';
          break;
        default:
          url = '';
      }
    
      if (url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            console.error('Failed to fetch data');
            setCurrentData([]);
          } else {
            const data = await response.json();
            console.log('data:', data);
            setCurrentData(data);
          }
        } catch (error) {
          console.error('Error fetching data: ', error);
          setCurrentData([]);
        }
      }
    };

    fetchData();
  }, [currentEntity]);


  return (
    <Flex>
      <Box flex={1}>
        <SidebarContent handleNavClickTable={handleNavClickTable} children={undefined} />
      </Box>
      <Box p={5} w="100%" h="100vh" overflow="auto" flex={4}>
        <Table selectedTable={currentEntity} data={currentData} />
      </Box>
    </Flex>
  );
}

export default DataEntryPage;
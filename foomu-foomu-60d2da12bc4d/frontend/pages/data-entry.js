import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Heading, Button, VStack, Flex } from '@chakra-ui/react';
import IngredientForm from '../src/components/Forms/IngredientForm';
import PropertyTypeForm from '../src/components/Forms/PropertyTypeForm';
import IngredientPropertyForm from '../src/components/Forms/IngredientPropertyForm';






function DataEntryPage() {
    const router = useRouter();
    const [currentEntity, setCurrentEntity] = useState(null);

    // an array of the database entities
    const entities = [
        'Ingredient',
        'Property Type',
        'Ingredient Properties'
        
    ];

    const handleButtonClick = (entity) => {
        setCurrentEntity(entity);
    };

    return (
        <Flex>
            <Box p={5} w="30%">
                <Heading mb={5}>Entry</Heading>

                <VStack spacing={4} align="stretch">
                    {entities.map(entity => (
                        <Button colorScheme="blue" key={entity} onClick={() => handleButtonClick(entity)}>
                            {entity}
                        </Button>
                    ))}
                </VStack>
            </Box>

            <Box p={5} w="70%">
                {/* Render the input form only if a button has been clicked */}
                {currentEntity === 'Ingredient' && <IngredientForm />}
                {currentEntity === 'Property Type' && <PropertyTypeForm />}
                {currentEntity === 'Ingredient Properties' && <IngredientPropertyForm />}
               
            </Box>
        </Flex>
    );
}

export default DataEntryPage;

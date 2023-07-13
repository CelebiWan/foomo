import React from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

function PropertyTypeForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/property-types/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Handle successful response or navigate to another page
      } else {
        // Handle error response
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" required />
      </FormControl>
     
      <FormControl id="alias">
          <FormLabel>Alias</FormLabel>
          <Input type="text" name="alias" required />
        </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default PropertyTypeForm;

import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Checkbox } from '@chakra-ui/react';

function IngredientPropertyForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/ingredient-properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setMessage('Form submitted successfully!');
        event.target.reset();
      } else {
        console.error('Error:', response.statusText);
        setMessage('Error occurred while submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl id="ingredient_id">
          <FormLabel>Ingredient ID</FormLabel>
          <Input type="number" name="ingredient_id" required />
        </FormControl>

        <FormControl id="property_type">
          <FormLabel>Property Type</FormLabel>
          <Input type="number" name="property_type" required />
        </FormControl>

        <FormControl id="value">
          <FormLabel>Value</FormLabel>
          <Input type="number" step="any" name="value" />
        </FormControl>

        <FormControl id="boolean">
          <FormLabel>Boolean</FormLabel>
          <Checkbox name="boolean" />
        </FormControl>

        <FormControl id="comment">
          <FormLabel>Comment</FormLabel>
          <Input type="text" name="comment" />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>

      {message && <div>{message}</div>}
    </>
  );
}

export default IngredientPropertyForm;

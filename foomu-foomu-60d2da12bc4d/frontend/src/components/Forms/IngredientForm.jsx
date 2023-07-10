import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';


function IngredientForm() {
  const [message, setMessage] = useState('');  // Add this line to create a state variable for message

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/ingredient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setMessage('Form submitted successfully!');
        event.target.reset();  // Resets the form after successful submission
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
       
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" required />
        </FormControl>

        <FormControl id="alias">
          <FormLabel>Alias</FormLabel>
          <Input type="text" name="alias" required />
        </FormControl>


        <FormControl id="cas_number">
          <FormLabel>CAS Number</FormLabel>
          <Input type="text" name="cas_number" required />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>

      {/* This div will display the message */}
      {message && <div>{message}</div>}
    </>
  );
}

export default IngredientForm;

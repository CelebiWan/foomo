import React from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

function EquipmentForm() {
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/equipments/', {
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

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
    {message && <div>{message}</div>}
    </>
  );
}

export default EquipmentForm;

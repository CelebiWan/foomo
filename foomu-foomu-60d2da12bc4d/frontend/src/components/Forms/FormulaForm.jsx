import React, { useState, useEffect } from 'react';
import { Button, FormControl, FormLabel, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input } from '@chakra-ui/react';
import FormulaTypeForm from './FormulaTypesForm';

function FormulaForm() {
  const [message, setMessage] = useState('');
  const [formulaTypes, setformulaTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('/api/formula')
          .then(res => res.json())
          .then(data => {
            setformulaTypes(data.formulaTypes);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }, [])
  
    const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/formula', {
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
  const { isOpen: isformulaTypeModalOpen, onOpen: onformulaTypeModalOpen, onClose: onformulaTypeModalClose } = useDisclosure();

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

        <FormControl id="formula_type">
          <FormLabel>Formula Type</FormLabel>
          <Select name="formula_type" required>
            {formulaTypes.map((formulaType) => (
              <option key={formulaType.id} value={formulaType.id}>{formulaType.name}</option>
            ))}
          </Select>
          <Button onClick={onformulaTypeModalOpen}>+</Button>
        </FormControl>

        <Modal isOpen={isformulaTypeModalOpen} onClose={onformulaTypeModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new formula type</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormulaTypeForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      
    
    

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
    {message && <div>{message}</div>}
    </>
  );
}

export default FormulaForm;

import React, { useState, useEffect } from 'react';
import {     Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Checkbox, 
  Select, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import FormulaForm from './FormulaForm';
import PropertyTypeForm from './PropertyTypesForm';



function FormulaPropertyForm() {
  const [message, setMessage] = useState('');
  const [formulas, setformulas] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
    // Fetch formulas and property types when component mounts
    fetch('/api/formulaproperties')
      .then(res => res.json())
      .then(data => {
        setformulas(data.formulas);
        setPropertyTypes(data.propertyTypes);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/formulaproperties', {
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

  const { isOpen: isformulaModalOpen, onOpen: onformulaModalOpen, onClose: onformulaModalClose } = useDisclosure();
  const { isOpen: isPropertyTypeModalOpen, onOpen: onPropertyTypeModalOpen, onClose: onPropertyTypeModalClose } = useDisclosure();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl id="formula_id">
          <FormLabel>formula</FormLabel>
          <Select name="formula_id" required>
            {formulas.map((formula) => (
              <option key={formula.id} value={formula.id}>{formula.name}</option>
            ))}
          </Select>
          <Button onClick={onformulaModalOpen}>+</Button>
        </FormControl>

        <Modal isOpen={isformulaModalOpen} onClose={onformulaModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new formula</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormulaForm />
            </ModalBody>
          </ModalContent>
        </Modal>

        <FormControl id="property_type">
          <FormLabel>Property Type</FormLabel>
          <Select name="property_type" required>
            {propertyTypes.map((propertyType) => (
              <option key={propertyType.id} value={propertyType.id}>{propertyType.name}</option>
            ))}
          </Select>
          <Button onClick={onPropertyTypeModalOpen}>+</Button>
        </FormControl>

        <Modal isOpen={isPropertyTypeModalOpen} onClose={onPropertyTypeModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new property type</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <PropertyTypeForm />
            </ModalBody>
          </ModalContent>
        </Modal>


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

export default FormulaPropertyForm;

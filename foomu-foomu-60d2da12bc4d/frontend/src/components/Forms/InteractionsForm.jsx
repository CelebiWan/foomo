import React, { useState, useEffect } from 'react';
import { Button, FormControl, FormLabel, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import IngredientForm from './IngredientForm';
import InteractionTypeForm from './InteractionTypesForm';

function InteractionForm() {
  const [message, setMessage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [interactionTypes, setInteractionTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    fetch('/api/interactions')
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        setIngredients(data.ingredients);
        setInteractionTypes(data.interactionTypes);
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
      const response = await fetch('/api/interactions', {
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

  const { isOpen: isIngredientModalOpen, onOpen: onIngredientModalOpen, onClose: onIngredientModalClose } = useDisclosure();
  const { isOpen: isInteractionTypeModalOpen, onOpen: onInteractionTypeModalOpen, onClose: onInteractionTypeModalClose } = useDisclosure();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl id="ingredient1">
            <FormLabel>Ingredient 1</FormLabel>
            <Select name="ingredient1" required>
              {ingredients.map((ingredient) => (
                <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
              ))}
            </Select>
            <Button onClick={onIngredientModalOpen}>+</Button>
          </FormControl>

          <Modal isOpen={isIngredientModalOpen} onClose={onIngredientModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add a new ingredient</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <IngredientForm />
              </ModalBody>
            </ModalContent>
          </Modal>

          <FormControl id="ingredient2">
            <FormLabel>Ingredient 2</FormLabel>
            <Select name="ingredient2" required>
              {ingredients.map((ingredient) => (
                <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
              ))}
            </Select>
            <Button onClick={onIngredientModalOpen}>+</Button>
          </FormControl>
          <Modal isOpen={isIngredientModalOpen} onClose={onIngredientModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add a new ingredient</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <IngredientForm />
              </ModalBody>
            </ModalContent>
          </Modal>

          <FormControl id="interaction_type">
            <FormLabel>Interaction Type</FormLabel>
            <Select name="interaction_type" required>
              {interactionTypes.map((interactionType) => (
                <option key={interactionType.id} value={interactionType.id}>{interactionType.name}</option>
              ))}
            </Select>
            <Button onClick={onInteractionTypeModalOpen}>+</Button>
          </FormControl>
          <Modal isOpen={isInteractionTypeModalOpen} onClose={onInteractionTypeModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add a new interaction type</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <InteractionTypeForm />
              </ModalBody>
            </ModalContent>
          </Modal>

          <FormControl id="value">
            <FormLabel>Value</FormLabel>
            <input type="number" step="any" name="value" />
          </FormControl>

          <FormControl id="boolean">
            <FormLabel>Boolean</FormLabel>
            <Checkbox name="boolean" />
          </FormControl>

          <FormControl id="comment">
            <FormLabel>Comment</FormLabel>
            <input type="text" name="comment" />
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      )}

      {message && <div>{message}</div>}
    </>
  );
}

export default InteractionForm;

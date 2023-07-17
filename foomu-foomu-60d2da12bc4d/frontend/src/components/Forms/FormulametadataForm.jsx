import React, { useState, useEffect } from 'react';
import { Button, FormControl, FormLabel, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import RecipeForm from './RecipeForm';
import FunctionalitiesForm from './FunctionalitiesForm';
import IngredientForm from './IngredientForm';
import FormulaForm from './FormulaForm'

function FormulaMetadataForm() {
    const [message, setMessage] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [functionalities, setFunctionalities] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [formulas, setFormulas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('/api/recipemetadata')
      .then(res => res.json())
  
          
        .then(data => {
          console.log(data); 
          setRecipes(data.recipes);
          setFunctionalities(data.functionalities);
          setIngredients(data.ingredientComponents);
          setFormulas(data.formulaComponents);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = new FormData(event.target);
      const values = Object.fromEntries(data.entries());
  
      try {
        const response = await fetch('/api/recipemetadata', {
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
    const { isOpen: isFormulaModalOpen, onOpen: onFormulaModalOpen, onClose: onFormulaModalClose } = useDisclosure();
    const { isOpen: isRecipeModalOpen, onOpen: onRecipeModalOpen, onClose: onRecipeModalClose } = useDisclosure();
    const { isOpen: isFunctionalityModalOpen, onOpen: onFunctionalityModalOpen, onClose: onFunctionalityModalClose } = useDisclosure();
  
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl id="recipe">
              <FormLabel>Recipe</FormLabel>
              <Select name="recipe" required>
                {recipes.map((recipe) => (
                  <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                ))}
              </Select>
              <Button onClick={onRecipeModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isRecipeModalOpen} onClose={onRecipeModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new recipe</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <RecipeForm />
                </ModalBody>
              </ModalContent>
            </Modal>
  
            <FormControl id="functionality">
              <FormLabel>Functionality</FormLabel>
              <Select name="functionality">
                {functionalities.map((functionality) => (
                  <option key={functionality.id} value={functionality.id}>{functionality.name}</option>
                ))}
              </Select>
              <Button onClick={onFunctionalityModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isFunctionalityModalOpen} onClose={onFunctionalityModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new functionality</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FunctionalitiesForm />
                </ModalBody>
              </ModalContent>
            </Modal>
  
            <FormControl id="ingredient_component">
              <FormLabel>Ingredient Component</FormLabel>
              <Select name="ingredient_component">
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
  
            <FormControl id="formula_component">
              <FormLabel>Formula Component</FormLabel>
              <Select name="formula_component">
                {formulas.map((formula) => (
                  <option key={formula.id} value={formula.id}>{formula.name}</option>
                ))}
              </Select>
              <Button onClick={onFormulaModalOpen}>+</Button>
            </FormControl>
  
            <Modal isOpen={isFormulaModalOpen} onClose={onFormulaModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a new formula</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormulaForm />
                </ModalBody>
              </ModalContent>
            </Modal>
  
            <FormControl id="percentage">
              <FormLabel>Percentage</FormLabel>
              <input type="number" step="any" name="percentage" required />
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
  
  export default FormulaMetadataForm;
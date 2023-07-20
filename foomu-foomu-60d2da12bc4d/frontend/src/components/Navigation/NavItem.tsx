import React, { FC, useState } from 'react';
import { IconType } from 'react-icons';
import {
    IconButton,
    Avatar,
    Box,
    Button,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
  } from '@chakra-ui/react';
  import IngredientForm from '../Forms/IngredientForm';
  import PropertyTypeForm from '../Forms/PropertyTypesForm';
  import IngredientPropertiesForm from '../Forms/IngredientPropertiesForm';
  import InteractionTypesForm from '../Forms/InteractionTypesForm';
  import InteractionsForm from '../Forms/InteractionsForm';
  import FunctionalitesForm from '../Forms/FunctionalitiesForm';
  import RecipeForm from '../Forms/RecipeForm';
  import RecipeMetadataForm from '../Forms/RecipemetadataForm';
  import FormulaForm from '../Forms/FormulaForm';
  import FormulaTypeForm from '../Forms/FormulaTypesForm';
  import FormulaPropertiesForm from '../Forms/FormulaPropertiesForm';
  import FormulaMetadataForm from '../Forms/FormulametadataForm';
  import EquipmentForm from '../Forms/EquipmentsForm';
  import ProcessesForm from '../Forms/ProcessesForm';
  import ValidationsForm from '../Forms/ValidationsForm';
  import ExperimentsForm from '../Forms/ExperimentsForm';
  import ExperimentMethodForm from '../Forms/ExperimentMethodsForm';
  import QualitativeTypeForm from '../Forms/QualitativeTypesForm';
  import QuantitativeResultForm from '../Forms/QuantitativeResultsForm';
  import QualitativeResultForm from '../Forms/QualitativeResultsForm';
  import ExperimentValidationForm from '../Forms/ExperimentValidationsForm';



  interface NavItemProps {
    icon: IconType;
    children: string;
    onClick: (entity: string) => void;
  }
  
  const NavItem: FC<NavItemProps> = ({ 
    icon: Icon, 
    children, 
    onClick,
   }) => {
  
    const handleClick = () => {
      onClick(children);
    };
  
  const [currentForm, setCurrentForm] = useState<string>('');

  const handleOpen = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentForm(children);
  };
  



  const renderForm = () => {
    switch (currentForm) {
      case 'Ingredient':
        return <IngredientForm />;
      case 'Property Type':
        return <PropertyTypeForm />;
      case 'Ingredient Property':
        return <IngredientPropertiesForm />;
      case 'Interaction Type':
        return <InteractionTypesForm />;
      case 'Interaction':
        return <InteractionsForm />;
      case 'Functionality':
        return <FunctionalitesForm />;
      case 'Recipe':
        return <RecipeForm />;
      case 'Recipe Metadata':
        return <RecipeMetadataForm />
      case 'Formula':
        return <FormulaForm />
      case 'Formula Type':
        return <FormulaTypeForm />
      case 'Formula Properties':
        return < FormulaPropertiesForm />
      case 'Formula Metadata':
        return < FormulaMetadataForm />
      case 'Equipment':
        return < EquipmentForm />
      case 'Process':
        return < ProcessesForm />
      case 'Validation':
        return < ValidationsForm />
      case 'Experiment':
        return < ExperimentsForm />
      case 'Experiment Method':
        return < ExperimentMethodForm />
      case 'Qualitative Type':
        return < QualitativeTypeForm />
      case 'Quantitative Result':
        return < QuantitativeResultForm />
      case 'Qualitative Result':
        return < QualitativeResultForm />
      case 'Experiment Validation':
        return < ExperimentValidationForm />  
      
  


      default:
        return null;
    }
  };

  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        onClick={handleClick}
        >
      
        {Icon && (
          <Box mr="4" fontSize="14" _groupHover={{ color: 'white' }}>
            <Icon />
          </Box>
        )}
        {children}
        <Button ml="auto" size="sm" onClick={handleOpen}>
          +
        </Button>

        <Modal isOpen={Boolean(currentForm)} onClose={() => setCurrentForm('')}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add {currentForm}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{renderForm()}</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => setCurrentForm('')}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Link>
  );
};

export default NavItem;
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
  

interface NavItemProps {
  icon: IconType;
  children: string;
  onClickIngredientTable: (entity: string) => void;
  onClickPropertyTypeTable: (entity: string) => void;
  onClickIngredientPropertiesTable: (entity: string) => void;
}

const NavItem: FC<NavItemProps> = ({ 
  icon: Icon, 
  children, 
  onClickIngredientTable,
  onClickPropertyTypeTable,
  onClickIngredientPropertiesTable, }) => {
  

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
      case 'Ingredient Properties':
        return <IngredientPropertiesForm />;
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
        onClick={() => {if (children === 'Ingredient') {
          onClickIngredientTable(children);
        } else if (children === 'Property Type') {
          onClickPropertyTypeTable(children);
        }else if (children === 'Ingredient Properties') {
          onClickIngredientPropertiesTable(children);}
      }}
        >
      
        {Icon && (
          <Box mr="4" fontSize="16" _groupHover={{ color: 'white' }}>
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
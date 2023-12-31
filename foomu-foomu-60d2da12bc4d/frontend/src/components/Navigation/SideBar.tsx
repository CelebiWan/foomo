import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
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
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import {
    GiChemicalDrop    
  } from 'react-icons/gi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { MouseEventHandler, ComponentType } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";


import IngredientForm from '../Forms/IngredientForm';
import PropertyTypeForm from '../Forms/PropertyTypeForm'; 
import IngredientPropertiesForm from '../Forms/IngredientPropertyForm';


interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Ingredient', icon: GiChemicalDrop }, // use appropriate icons
  { name: 'Property Type', icon: FiSettings },
  { name: 'Ingredient Properties', icon: GiChemicalDrop },
  ];

  export default function SidebarWithHeader({
    children,
  }: {
    children: ReactNode;
  }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    );
  }
  
  interface SidebarProps extends BoxProps {
    onClose: () => void;
  }
  
  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const fetchData = (name: ReactText) => {
      // define what happens when a nav item is clicked here
      // replace with your actual logic
      console.log(`Fetch data for ${name}`);
    };
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} handleNavClick={fetchData}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };
  
  interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    handleNavClick: (name: ReactText) => void;
    
  }
  const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    const { handleNavClick } = rest;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentForm, setCurrentForm] = React.useState(''); 
  
    const handleOpen = () => {
      if (typeof children === 'string') {
        setCurrentForm(children);
        onOpen();
      }
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
          onClick={() => handleNavClick(children)}  // Fetch data when the sidebar item is clicked
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
          <Button ml="auto" size="sm" onClick={handleOpen}>+</Button>  
  
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add {currentForm}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {renderForm()}
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
  
        </Flex>
      </Link>
    );
  };
  
  
  
  interface MobileProps extends FlexProps {
    onOpen: () => void;
  }
  const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          Logo
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    // src={
                    //   'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    // }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">Celebi Wan</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

interface SidebarNavItemsProps {
  children: ReactNode;
}

const SidebarNavItems: React.FC<SidebarNavItemsProps> = ({ children }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      {children}
    </Box>
  );
};

export default SidebarNavItems;

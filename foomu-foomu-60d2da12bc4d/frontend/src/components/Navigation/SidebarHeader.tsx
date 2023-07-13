// SidebarHeader.tsx
import React from 'react';
import { Flex, Text, CloseButton } from '@chakra-ui/react';

const SidebarHeader = () => {
  return (
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Foomo
      </Text>
      <CloseButton display={{ base: 'flex', md: 'none' }} />
    </Flex>
  );
};

export default SidebarHeader;

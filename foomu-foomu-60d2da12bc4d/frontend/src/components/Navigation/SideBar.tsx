// Sidebar.tsx
import React, { FC, ReactNode, useState } from 'react';
import { Box } from '@chakra-ui/react';
import SidebarHeader from './SidebarHeader';
import SidebarNavItems from './SidebarNavItems';
import { LinkItems,LinkItemProps } from './LinkItems';
import NavItem from './NavItem';


interface SidebarProps {children: ReactNode; 
  handleNavClickIngredientTable: (entity: string) => void;
  handleNavClickPropertyTypeTable: (entity: string) => void;
  handleNavClickIngredientPropertiesTable: (entity: string) => void;
  handleNavClickInteractionTypesTable: (entity: string) => void;
  handleNavClickInteractionsTable: (entity: string) => void;
  
  
}

  const SidebarContent: FC<SidebarProps> = ({
    children,
    handleNavClickIngredientTable,
    handleNavClickPropertyTypeTable,
    handleNavClickIngredientPropertiesTable,
    handleNavClickInteractionTypesTable,
    handleNavClickInteractionsTable,
  }) => {
    return (
      
      <SidebarNavItems>
        <SidebarHeader />
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            onClickIngredientTable={handleNavClickIngredientTable}
            onClickPropertyTypeTable={handleNavClickPropertyTypeTable}
            onClickIngredientPropertiesTable={handleNavClickIngredientPropertiesTable}
            onClickInteractionTypesTable={handleNavClickInteractionTypesTable}
            onClickInteractionsTable={handleNavClickInteractionsTable}
          
          >
            {link.name}
          </NavItem>
        ))}
        {children}
      </SidebarNavItems>
      
    );
  };
  
  export default SidebarContent;
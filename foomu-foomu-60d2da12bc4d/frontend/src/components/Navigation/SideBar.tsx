// Sidebar.tsx
import React, { FC, ReactNode, useState } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarNavItems from './SidebarNavItems';
import { LinkItems,LinkItemProps } from './LinkItems';
import NavItem from './NavItem';


interface SidebarProps {children: ReactNode; 
  handleNavClickIngredientTable: (entity: string) => void;
  handleNavClickPropertyTypeTable: (entity: string) => void;
  handleNavClickIngredientPropertiesTable: (entity: string) => void;}

  const SidebarContent: FC<SidebarProps> = ({
    children,
    handleNavClickIngredientTable,
    handleNavClickPropertyTypeTable,
    handleNavClickIngredientPropertiesTable,
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
          
          >
            {link.name}
          </NavItem>
        ))}
        {children}
      </SidebarNavItems>
    );
  };
  
  export default SidebarContent;
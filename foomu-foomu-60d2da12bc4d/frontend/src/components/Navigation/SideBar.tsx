// Sidebar.tsx
import React, { FC, ReactNode, useState } from 'react';
import { Box } from '@chakra-ui/react';
import SidebarHeader from './SidebarHeader';
import SidebarNavItems from './SidebarNavItems';
import { LinkItems,LinkItemProps } from './LinkItems';
import NavItem from './NavItem';


interface SidebarProps {children: ReactNode; 
  handleNavClick: (entity: string) => void;
  
  
}

  const SidebarContent: FC<SidebarProps> = ({
    children,
    handleNavClick,
  }) => {
    return (
      
      <SidebarNavItems>
        <SidebarHeader />
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            onClick={handleNavClick}
          
          >
            {link.name}
          </NavItem>
        ))}
        {children}
      </SidebarNavItems>
      
    );
  };
  
  export default SidebarContent;
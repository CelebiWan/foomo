// Sidebar.tsx
import React, { FC, ReactNode, useState } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarNavItems from './SidebarNavItems';
import { LinkItems } from './LinkItems';
import NavItem from './NavItem';


interface SidebarProps {children: ReactNode; handleNavClickTable: (entity: string) => void;}

const SidebarContent: React.FC<SidebarProps> = ({ children,handleNavClickTable }) => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const handleNavClick = (name: string) => {
    console.log('handleNavClick called:', name);
    setSelectedTable(name);
  };

  return (
    <SidebarNavItems>
      <SidebarHeader />
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClickBigButton={handleNavClickTable}>
          {link.name}
        </NavItem>
      ))}
      {children}
    </SidebarNavItems>
  );
};

export default SidebarContent;
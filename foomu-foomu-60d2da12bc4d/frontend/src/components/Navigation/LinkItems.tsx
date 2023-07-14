import { IconType } from 'react-icons';
import { GiChemicalDrop } from 'react-icons/gi';

export interface LinkItemProps {
  name: string;
  icon: IconType;
}

export const LinkItems: Array<LinkItemProps> = [
  { name: 'Ingredient', icon: GiChemicalDrop },
  { name: 'Property Type', icon: GiChemicalDrop },
  { name: 'Ingredient Properties', icon: GiChemicalDrop },
  { name: 'Interaction Types', icon: GiChemicalDrop },
  { name: 'Interactions', icon: GiChemicalDrop },
];
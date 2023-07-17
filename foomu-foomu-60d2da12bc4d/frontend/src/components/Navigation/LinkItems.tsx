import { IconType } from 'react-icons';
import { GiChemicalDrop } from 'react-icons/gi';

export interface LinkItemProps {
  name: string;
  icon: IconType;
}

export const LinkItems: Array<LinkItemProps> = [
  { name: 'Ingredient', icon: GiChemicalDrop },
  { name: 'Property Type', icon: GiChemicalDrop },
  { name: 'Ingredient Property', icon: GiChemicalDrop },
  { name: 'Interaction Type', icon: GiChemicalDrop },
  { name: 'Interaction', icon: GiChemicalDrop },
  { name: 'Functionality', icon: GiChemicalDrop },
  { name: 'Recipe', icon: GiChemicalDrop },
  { name: 'Recipe Metadata', icon: GiChemicalDrop },
  { name: 'Formula', icon: GiChemicalDrop },
  { name: 'Formula Type', icon: GiChemicalDrop },
  { name: 'Formula Properties', icon: GiChemicalDrop },
  { name: 'Formula Metadata', icon: GiChemicalDrop },
  { name: 'Equipment', icon: GiChemicalDrop },
  { name: 'Process', icon: GiChemicalDrop },
  { name: 'Validation', icon: GiChemicalDrop },
  { name: 'Experiment', icon: GiChemicalDrop },
  { name: 'Experiment Method', icon: GiChemicalDrop },
  { name: 'Qualitative Type', icon: GiChemicalDrop },
  { name: 'Qualitative Result', icon: GiChemicalDrop },
  { name: 'Quantitative Result', icon: GiChemicalDrop },
  { name: 'Experiment Validation', icon: GiChemicalDrop },
  
];

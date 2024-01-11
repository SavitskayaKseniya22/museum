'use client';

import { createContext } from 'react';

const BurgerContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: () => {} });

export default BurgerContext;

import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
import React from 'react';
import Light from '../themes/Light';
import ThemeInterface from '../types/ThemeInterface';
import getModifierStyles from '../functions/getModifierStyles';
import { ThemeProvider } from '../contexts/ThemeContext'; 

// export const ThemeContext = React.createContext<ThemeInterface>(Light);
// export const ThemeProvider = ThemeContext.Provider;

interface ThemeContainerInterface {
  children: React.ReactNode,
  theme: ThemeInterface

}

const ThemeContainer = ({theme = Light,  children}: ThemeContainerInterface) => {
  const {mode, colors, sizes}: any = theme;
  const styles = getModifierStyles(theme); 


  return (
    <ThemeProvider value={{styles, colors, sizes, mode}}>
      {children} 
    </ThemeProvider>
  );
};

export default ThemeContainer;

import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext'; 

const useTheme = () => {
  const theme: any = React.useContext(ThemeContext);
  return theme;
};

export default useTheme;

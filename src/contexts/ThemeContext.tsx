import React from 'react';
import Light from "../themes/Light"

export const ThemeContext = React.createContext(Light);
export const ThemeProvider = ThemeContext.Provider;


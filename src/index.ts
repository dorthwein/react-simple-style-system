export { default as useStyleModifiers } from './hooks/useStyleModifiers';
export { default as useTheme } from './hooks/useTheme';
export { default as ThemeContainer } from './components/ThemeContainer';

export { default as StyleModifiersInterface } from './types/StyleModifiersInterface'; 
export { default as ThemeInterface } from './types/ThemeInterface'; 

import Light from "./themes/Light"
import Dark from "./themes/Dark"
export const themes = { Light, Dark }


import ThemeInterface from '../types/ThemeInterface';

const lightText = "#FFFFFF"
const darkText = "#242526"

const theme: ThemeInterface = {  
  mode: 'light',  
  sizes: {
    unit: 4, 
    roundedRadius: 8, 
    hairline: 0.25, 
    h1: 32,
    h2: 24,
    h3: 18,
    body: 14,
    caption: 12,
    label: 14,
  },
  colors: {
    transparent: 'transparent',

    primary: '#FFFFFF',
    onPrimary: darkText,

    primaryContainer: '#F6F8FC',
    onPrimaryContainer: darkText,

    secondary: '#D6E2FB',
    onSecondary: darkText,

    secondaryContainer: '#EBF1FA',
    onSecondaryContainer: darkText,

    tertiary: '#C7DAFC',
    onTertiary: darkText,

    tertiaryContainer: '#F3F6FB',
    onTertiaryContainer: darkText,

    background: '#F6F8FC',
    onBackground: darkText,

    backgroundContainer: '#F6F8FC',
    onBackgroundContainer: darkText,

    surface: '#FFFFFF',
    onSurface: darkText,
    
    surfaceVariant: '#EFEFEF',
    onSurfaceVariant: darkText,

    outline: 'rgba(0,0,0, 0.25)',

    danger: '#ff4c30',
    onDanger: lightText,
    dangerContainer: '#f1a9a0',
    onDangerContainer: lightText,

    warning: "#f9b42d",
    onWarning: lightText,
    warningContainer: '#fbc093',
    onWarningContainer: darkText,


    success: '#66cc99',
    onSuccess: lightText,
    successContainer: '#c8f7c5',
    onSuccessContainer: darkText,


    disabled: 'rgba(0,0,0, 0.05)',
    onDisabled: 'rgba(0,0,0, 0.35)',
    disabledContainer: '#EFEFEF',
    onDisabledContainer: 'rgba(0,0,0, 0.35)',


    info: '#038aff',
    onInfo: lightText,

    infoContainer: '#89c4f4',
    onInfoContainer: lightText,

  },
};

export default theme;

import ThemeInterface from '../types/ThemeInterface';

const lightText = '#FFFFFF';
const darkText = '#242526';

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
    primaryContainer: '#F6F8FC',
    secondary: '#D6E2FB',
    secondaryContainer: '#EBF1FA',
    tertiary: '#C7DAFC',
    tertiaryContainer: '#F3F6FB',
    background: '#F6F8FC',
    surface: '#FFFFFF',
    surfaceVariant: '#EFEFEF',
    outline: 'rgba(0,0,0, 0.25)',

    onPrimary: darkText,
    onPrimaryContainer: darkText,
    onSecondary: darkText,
    onSecondaryContainer: darkText,
    onTertiary: darkText,
    onTertiaryContainer: darkText,
    onSurface: darkText,
    onSurfaceVariant: darkText,
    onBackground: darkText,

    info: '#038aff',
    infoContainer: '#89c4f4',
    success: '#66cc99',
    successContainer: '#c8f7c5',
    warning: '#f9b42d',
    warningContainer: '#fbc093',
    danger: '#ff4c30',
    dangerContainer: '#f1a9a0',
    disabled: 'rgba(0,0,0, 0.05)',
    disabledContainer: '#EFEFEF',

    onInfo: lightText,
    onInfoContainer: lightText,
    onSuccess: lightText,
    onSuccessContainer: darkText,
    onWarning: lightText,
    onWarningContainer: darkText,
    onDanger: lightText,
    onDangerContainer: lightText,
    onDisabled: 'rgba(0,0,0, 0.35)',
    onDisabledContainer: 'rgba(0,0,0, 0.35)',
  },
};

export default theme;

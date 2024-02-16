import ThemeInterface from '../types/ThemeInterface';

const lightText = '#E5E1E5';
const darkText = '#000000';

const theme: ThemeInterface = {
  mode: 'dark',
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

    primary: '#D0BCFF',
    onPrimary: '#381E72',
    primaryContainer: '#4F378B',
    onPrimaryContainer: '#EADDFF',

    secondary: '#CCC2DC',
    onSecondary: '#332D41',
    secondaryContainer: '#4A4458',
    onSecondaryContainer: '#E8DEF8',

    tertiary: '#EFB8C8',
    onTertiary: '#492532',
    tertiaryContainer: '#633B48',
    onTertiaryContainer: '#FFD8E4',

    background: '#1C1B1F',
    onBackground: '#E6E1E5',

    surface: '#25242A',
    onSurface: '#E6E1E5',

    surfaceVariant: '#49454F',
    onSurfaceVariant: '#CAC4D0',

    outline: '#938F99',

    danger: '#F2B8B5',
    onDanger: '#601410',
    dangerContainer: '#8C1D18',
    onDangerContainer: '#F9DEDC',

    warning: '#f9b42d',
    onWarning: lightText,
    warningContainer: '#fbc093',
    onWarningContainer: darkText,

    success: '#66cc99',
    onSuccess: lightText,
    successContainer: '#c8f7c5',
    onSuccessContainer: darkText,

    disabled: '#2F3031',
    onDisabled: 'rgba(255,255,255, 0.35)',
    disabledContainer: '#5A5B5B',
    onDisabledContainer: 'rgba(255,255,255, 0.35)',

    info: '#038aff',
    onInfo: lightText,

    infoContainer: '#89c4f4',
    onInfoContainer: lightText,
  },
};

export default theme;

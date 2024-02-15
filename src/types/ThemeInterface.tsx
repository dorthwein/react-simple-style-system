export default interface ThemeInterface {
  mode: string;
  styles?: any;  
  modifier?: Function;
  sizes: {
    unit:  number;
    roundedRadius:  number;
    hairline: number;
    h1: number;
    h2: number;
    h3: number;
    body: number;
    caption: number;
    label: number;
  };
  colors: {
    transparent: string;
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    background: string;
    onBackground: string;
    backgroundContainer: string;
    onBackgroundContainer: string;
    surface: string;
    onSurface: string;

    surfaceVariant: string;
    onSurfaceVariant: string; 

    outline: string;
    
    danger: string;
    onDanger: string;
    dangerContainer: string;
    onDangerContainer: string;
    warning: string;
    onWarning: string;
    warningContainer: string;
    onWarningContainer: string;
    success: string;
    onSuccess: string;
    successContainer: string;
    onSuccessContainer: string;
    disabled: string;
    onDisabled: string;
    disabledContainer: string;
    onDisabledContainer: string;
    info: string;
    infoContainer: string;
    onInfoContainer: string; 
    onInfo: string;
  };
}

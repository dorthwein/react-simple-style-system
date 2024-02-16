export default interface ThemeInterface {
  mode: string;
  styles?: any;
  modifier?: Function;
  sizes: {
    unit: number;
    roundedRadius: number;
    hairline: number;
    h1: number;
    h2: number;
    h3: number;
    body: number;
    caption: number;
    label: number;
  };
  colors: {
    primary: string;
    primaryContainer: string;
    secondary: string;
    secondaryContainer: string;
    tertiary: string;
    tertiaryContainer: string;

    surface: string;
    surfaceVariant: string;
    background: string;
    transparent: string;

    onPrimary: string;
    onPrimaryContainer: string;
    onSecondary: string;
    onSecondaryContainer: string;
    onTertiary: string;
    onTertiaryContainer: string;

    onSurface: string;
    onSurfaceVariant: string;
    onBackground: string;

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

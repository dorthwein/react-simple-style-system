import React from 'react'
export default interface StyleModifiersInterface extends React.PropsWithChildren {
  [key: string]:
    | string
    | React.ReactNode
    | React.MouseEventHandler
    | Function
    | {};
  key?: string;
  style?: any;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  body?: boolean;
  caption?: boolean;

  textShadow?: boolean;
  rounded?: boolean;
  roundedT?: boolean;
  roundedB?: boolean;
  roundedR?: boolean;
  roundedL?: boolean;
  outlined?: boolean;
  outlinedT?: boolean;
  outlinedB?: boolean;
  outlinedR?: boolean;
  outlinedL?: boolean;

  thin?: boolean;
  bold?: boolean;
  italic?: boolean;
  lineThrough?: boolean;

  paddedUnit?: boolean;
  paddedUnitT?: boolean;
  paddedUnitB?: boolean;
  paddedUnitR?: boolean;
  paddedUnitL?: boolean;
  paddedUnitV?: boolean;
  paddedUnitH?: boolean;

  padded?: boolean;
  paddedT?: boolean;
  paddedB?: boolean;
  paddedR?: boolean;
  paddedL?: boolean;
  paddedV?: boolean;
  paddedH?: boolean;
  padded2x?: boolean;
  paddedV2x?: boolean;
  paddedH2x?: boolean;

  spaced?: boolean;
  spacedT?: boolean;
  spacedB?: boolean;
  spacedR?: boolean;
  spacedL?: boolean;
  spacedH?: boolean;
  spacedV?: boolean;
  margin?: boolean;
  marginV?: boolean;
  marginH?: boolean;
  marginT?: boolean;
  marginB?: boolean;
  marginR?: boolean;
  marginL?: boolean;
  margin2x?: boolean;
  marginV2x?: boolean;
  marginH2x?: boolean;
  marginT2x?: boolean;
  marginB2x?: boolean;
  marginR2x?: boolean;
  marginL2x?: boolean;

  row?: boolean;
  rowReverse?: boolean;
  column?: boolean;

  width100?: boolean;
  flex?: boolean;
  flex2?: boolean;
  flex3?: boolean;
  flex4?: boolean;
  flex5?: boolean;
  spaceEvenly?: boolean;
  center?: boolean;
  centerV?: boolean;
  centerH?: boolean;
  elevated?: boolean;

  textCenter?: boolean;
  textLeft?: boolean;
  textRight?: boolean;
  right?: boolean;
  left?: boolean;
  centerSelf?: boolean;
  rightAlign?: boolean;
  leftAlign?: boolean;
  top?: boolean;
  bottom?: boolean;
  topAlign?: boolean;
  bottomAlign?: boolean;
  flexWrap?: boolean;

  transparent?: boolean;
  primary?: boolean;
  onPrimary?: boolean;
  primaryContainer?: boolean;
  onPrimaryContainer?: boolean;

  secondary?: boolean;
  onSecondary?: boolean;
  secondaryContainer?: boolean;
  onSecondaryContainer?: boolean;

  tertiary?: boolean;
  onTertiary?: boolean;
  tertiaryContainer?: boolean;
  onTertiaryContainer?: boolean;

  danger?: boolean;
  onDanger?: boolean;

  warning?: boolean;
  onWarning?: boolean;

  success?: boolean;
  onSuccess?: boolean;

  disabled?: boolean;
  onDisabled?: boolean;

  info?: boolean;
  onInfo?: boolean;

  surface?: boolean;
  onSurface?: boolean;

  background?: boolean;
  onBackground?: boolean;
}

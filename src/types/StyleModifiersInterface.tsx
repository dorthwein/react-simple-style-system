import React from 'react';
export default interface StyleModifiersInterface
  extends React.PropsWithChildren {
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
  outline?: boolean;
  outlineT?: boolean;
  outlineB?: boolean;
  outlineR?: boolean;
  outlineL?: boolean;

  thin?: boolean;
  bold?: boolean;
  italic?: boolean;
  lineThrough?: boolean;

  padding?: boolean;
  paddingT?: boolean;
  paddingB?: boolean;
  paddingR?: boolean;
  paddingL?: boolean;
  paddingV?: boolean;
  paddingH?: boolean;

  padding2x?: boolean;
  paddingT2x?: boolean;
  paddingB2x?: boolean;
  paddingR2x?: boolean;
  paddingL2x?: boolean;
  paddingV2x?: boolean;
  paddingH2x?: boolean;

  padding3x?: boolean;
  paddingT3x?: boolean;
  paddingB3x?: boolean;
  paddingR3x?: boolean;
  paddingL3x?: boolean;
  paddingV3x?: boolean;
  paddingH3x?: boolean;

  padding4x?: boolean;
  paddingT4x?: boolean;
  paddingB4x?: boolean;
  paddingR4x?: boolean;
  paddingL4x?: boolean;
  paddingV4x?: boolean;
  paddingH4x?: boolean;

  margin?: boolean;
  marginT?: boolean;
  marginB?: boolean;
  marginR?: boolean;
  marginL?: boolean;
  marginH?: boolean;
  marginV?: boolean;

  margin2x?: boolean;
  marginV2x?: boolean;
  marginH2x?: boolean;
  marginT2x?: boolean;
  marginB2x?: boolean;
  marginR2x?: boolean;
  marginL2x?: boolean;

  margin3x?: boolean;
  marginV3x?: boolean;
  marginH3x?: boolean;
  marginT3x?: boolean;
  marginB3x?: boolean;
  marginR3x?: boolean;
  marginL3x?: boolean;

  margin4x?: boolean;
  marginV4x?: boolean;
  marginH4x?: boolean;
  marginT4x?: boolean;
  marginB4x?: boolean;
  marginR4x?: boolean;
  marginL4x?: boolean;

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

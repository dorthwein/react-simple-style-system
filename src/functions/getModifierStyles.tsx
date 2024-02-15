import ThemeInterface from "../types/ThemeInterface"

const getModifierStyles = (theme: ThemeInterface) => {
  const {sizes, colors} = theme
  const styles: any = {
    h1: { fontSize: sizes.h1 },
    h2: { fontSize: sizes.h2 },
    h3: { fontSize: sizes.h3 },
    body: { fontSize: sizes.body },
    caption: { fontSize: sizes.caption },
    label: { fontSize: sizes.label, fontWeight: "bold" },

    textShadow: {
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    },

    rounded: { borderRadius: sizes.roundedRadius },
    roundedT: {
      borderTopRightRadius: sizes.roundedRadius,
      borderTopLeftRadius: sizes.roundedRadius,
    },
    roundedB: {
      borderBottomRightRadius: sizes.roundedRadius,
      borderBottomLeftRadius: sizes.roundedRadius,
    },
    roundedR: {
      borderTopRightRadius: sizes.roundedRadius,
      borderBottomRightRadius: sizes.roundedRadius,
    },
    roundedL: {
      borderTopLeftRadius: sizes.roundedRadius,
      borderBottomLeftRadius: sizes.roundedRadius,
    },

    outlined: {
      borderWidth: sizes.hairline,
      borderColor: colors.outline,
      borderStyle: "solid",
    },
    outlinedT: {
      borderTopWidth: sizes.hairline,
      borderTopColor: colors.outline,
      borderStyle: "solid",
    },
    outlinedB: {
      borderBottomWidth: sizes.hairline,
      borderBottomColor: colors.outline,
      borderStyle: "solid",
    },
    outlinedR: {
      borderRightWidth: sizes.hairline,
      borderRightColor: colors.outline,
      borderStyle: "solid",
    },
    outlinedL: {
      borderLeftWidth: sizes.hairline,
      borderLeftColor: colors.outline,
      borderStyle: "solid",
    },

    thin: { fontWeight: 300 },
    bold: { fontWeight: 700 },
    italic: { fontStyle: "italic" },
    lineThrough: { textDecorationLine: "line-through" },

    paddedUnit: { padding: sizes.unit },
    paddedUnitT: { paddingTop: sizes.unit },
    paddedUnitB: { paddingBottom: sizes.unit },
    paddedUnitR: { paddingRight: sizes.unit },
    paddedUnitL: { paddingLeft: sizes.unit },
    paddedUnitV: { paddingTop: sizes.unit, paddingBottom: sizes.unit },
    paddedUnitH: { paddingRight: sizes.unit, paddingLeft: sizes.unit },

    padded: { padding: sizes.unit * 2 },
    paddedT: { paddingTop: sizes.unit * 2 },
    paddedB: { paddingBottom: sizes.unit * 2 },
    paddedR: { paddingRight: sizes.unit * 2 },
    paddedL: { paddingLeft: sizes.unit * 2 },
    paddedV: { paddingTop: sizes.unit * 2, paddingBottom: sizes.unit * 2 },
    paddedH: { paddingRight: sizes.unit * 2, paddingLeft: sizes.unit * 2 },

    padded2x: { padding: sizes.unit * 4 },
    paddedV2x: { paddingTop: sizes.unit * 4, paddingBottom: sizes.unit * 4 },
    paddedH2x: { paddingRight: sizes.unit * 4, paddingLeft: sizes.unit * 4 },

    spaced: { margin: sizes.unit },
    spacedT: { marginTop: sizes.unit },
    spacedB: { marginBottom: sizes.unit },
    spacedR: { marginRight: sizes.unit },
    spacedL: { marginLeft: sizes.unit },
    spacedH: { marginRight: sizes.unit, marginLeft: sizes.unit },
    spacedV: { marginTop: sizes.unit, marginBottom: sizes.unit },

    margin: { margin: sizes.unit * 2 },
    marginV: { marginTop: sizes.unit * 2, marginBottom: sizes.unit * 2 },
    marginH: { marginRight: sizes.unit * 2, marginLeft: sizes.unit * 2 },
    marginT: { marginTop: sizes.unit * 2 },
    marginB: { marginBottom: sizes.unit * 2 },
    marginR: { marginRight: sizes.unit * 2 },
    marginL: { marginLeft: sizes.unit * 2 },

    margin2x: { margin: sizes.unit * 4 },
    marginV2x: { marginTop: sizes.unit * 4, marginBottom: sizes.unit * 4 },
    marginH2x: { marginRight: sizes.unit * 4, marginLeft: sizes.unit * 4 },
    marginT2x: { marginTop: sizes.unit * 4 },
    marginB2x: { marginBottom: sizes.unit * 4 },
    marginR2x: { marginRight: sizes.unit * 4 },
    marginL2x: { marginLeft: sizes.unit * 4 },

    row: { flexDirection: "row" },
    rowReverse: { flexDirection: "row-reverse" },
    column: { flexDirection: "column" },

    width100: { width: "100%" },

    flex: { flex: 1 },
    flex2: { flex: 2 },
    flex3: { flex: 3 },
    flex4: { flex: 4 },
    flex5: { flex: 5 },

    spaceEvenly: { alignItems: "space-evenly", justifyContent: "space-evenly" },
    center: { justifyContent: "center", alignItems: "center" },
    centerV: { justifyContent: "center" },
    centerH: { alignItems: "center" },

    elevated: {
      boxShadow: "0px 2px 4px 0px #000",
      shadowColor: "rgba(0, 0, 0, 0.55)",

      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 3,
      shadowOpacity: 0.25,      
    },

    textCenter: { textAlign: "center" },
    textLeft: { textAlign: "left" },
    textRight: { textAlign: "right" },

    right: { alignSelf: "flex-end" },
    left: { alignSelf: "flex-start" },
    centerSelf: { alignSelf: "center" },

    rightAlign: { alignItems: "flex-end" },
    leftAlign: { alignItems: "flex-start" },

    top: { justifyContent: "flex-start" },
    bottom: { justifyContent: "flex-end" },
    topAlign: { alignItems: "flex-start" },
    bottomAlign: { alignItems: "flex-end" },
    flexWrap: { flexWrap: "wrap" },
    
    transparent: { backgroundColor: 'transparent'},

    primary: { backgroundColor: colors.primary },
    primaryContainer: { backgroundColor: colors.primaryContainer },

    secondary: { backgroundColor: colors.secondary },
    secondaryContainer: { backgroundColor: colors.secondaryContainer },

    tertiary: { backgroundColor: colors.tertiary },
    tertiaryContainer: { backgroundColor: colors.tertiaryContainer },

    danger: { backgroundColor: colors.danger },
    dangerContainer: { backgroundColor: colors.dangerContainer },

    warning: { backgroundColor: colors.warning },
    warningContainer: { backgroundColor: colors.warningContainer },

    success: { backgroundColor: colors.success },
    successContainer: { backgroundColor: colors.successContainer },

    disabled: { backgroundColor: colors.disabled },
    disabledContainer: { backgroundColor: colors.disabledContainer },

    info: { backgroundColor: colors.info },
    infoContainer: { backgroundColor: colors.infoContainer },

    surface: { backgroundColor: colors.surface },
    surfaceVariant: { backgroundColor: colors.surfaceVariant },

    background: { backgroundColor: colors.background },
    backgroundContainer: { backgroundColor: colors.backgroundContainer },

    onPrimary: { color: colors.onPrimary },
    onPrimaryContainer: { color: colors.onPrimaryContainer },

    onSecondary: { color: colors.onSecondary },
    onSecondaryContainer: { color: colors.onSecondaryContainer },

    onTertiary: { color: colors.onTertiary },
    onTertiaryContainer: { color: colors.onTertiaryContainer },

    onDanger: { color: colors.onDanger },
    onDangerContainer: { color: colors.onDangerContainer },

    onWarning: { color: colors.onWarning },
    onWarningContainer: { color: colors.onWarningContainer },

    onSuccess: { color: colors.onSuccess },
    onSuccessContainer: { color: colors.onSuccessContainer },

    onDisabled: { color: colors.onDisabled },
    onDisabledContainer: { color: colors.onDisabledContainer },

    onInfo: { color: colors.onInfo },
    onInfoContainer: { color: colors.onInfoContainer },

    onSurface: { color: colors.onSurface },
    onsurfaceVariant: { color: colors.onsurfaceVariant },
    
    onBackground: { color: colors.onBackground },
    onBackgroundContainer: { color: colors.onBackgroundContainer },  
  }

  return styles
}

export default getModifierStyles
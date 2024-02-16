import ThemeInterface from '../types/ThemeInterface';

const getModifierStyles = (theme: ThemeInterface) => {
  const {sizes, colors} = theme;
  const styles: any = {
    h1: {fontSize: sizes.h1},
    h2: {fontSize: sizes.h2},
    h3: {fontSize: sizes.h3},
    body: {fontSize: sizes.body},
    caption: {fontSize: sizes.caption},
    label: {fontSize: sizes.label, fontWeight: 'bold'},

    textShadow: {
      textShadow:
        '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    },

    rounded: {borderRadius: sizes.roundedRadius},
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

    outline: {
      borderWidth: sizes.hairline,
      borderColor: colors.outline,
      borderStyle: 'solid',
    },
    outlineT: {
      borderTopWidth: sizes.hairline,
      borderTopColor: colors.outline,
      borderStyle: 'solid',
    },
    outlineB: {
      borderBottomWidth: sizes.hairline,
      borderBottomColor: colors.outline,
      borderStyle: 'solid',
    },
    outlineR: {
      borderRightWidth: sizes.hairline,
      borderRightColor: colors.outline,
      borderStyle: 'solid',
    },
    outlineL: {
      borderLeftWidth: sizes.hairline,
      borderLeftColor: colors.outline,
      borderStyle: 'solid',
    },

    thin: {fontWeight: 300},
    bold: {fontWeight: 700},
    italic: {fontStyle: 'italic'},
    lineThrough: {textDecorationLine: 'line-through'},

    padding: {padding: sizes.unit},
    paddingT: {paddingTop: sizes.unit},
    paddingB: {paddingBottom: sizes.unit},
    paddingR: {paddingRight: sizes.unit},
    paddingL: {paddingLeft: sizes.unit},
    paddingV: {paddingTop: sizes.unit, paddingBottom: sizes.unit},
    paddingH: {paddingRight: sizes.unit, paddingLeft: sizes.unit},

    padding2x: {padding: sizes.unit * 2},
    paddingT2x: {paddingTop: sizes.unit * 2},
    paddingB2x: {paddingBottom: sizes.unit * 2},
    paddingR2x: {paddingRight: sizes.unit * 2},
    paddingL2x: {paddingLeft: sizes.unit * 2},
    paddingV2x: {paddingTop: sizes.unit * 2, paddingBottom: sizes.unit * 2},
    paddingH2x: {paddingRight: sizes.unit * 2, paddingLeft: sizes.unit * 2},

    padding3x: {padding: sizes.unit * 3},
    paddingT3x: {paddingTop: sizes.unit * 3},
    paddingB3x: {paddingBottom: sizes.unit * 3},
    paddingR3x: {paddingRight: sizes.unit * 3},
    paddingL3x: {paddingLeft: sizes.unit * 3},
    paddingV3x: {paddingTop: sizes.unit * 3, paddingBottom: sizes.unit * 3},
    paddingH3x: {paddingRight: sizes.unit * 3, paddingLeft: sizes.unit * 3},

    padding4x: {padding: sizes.unit * 4},
    paddingT4x: {paddingTop: sizes.unit * 4},
    paddingB4x: {paddingBottom: sizes.unit * 4},
    paddingR4x: {paddingRight: sizes.unit * 4},
    paddingL4x: {paddingLeft: sizes.unit * 4},
    paddingV4x: {paddingTop: sizes.unit * 4, paddingBottom: sizes.unit * 4},
    paddingH4x: {paddingRight: sizes.unit * 4, paddingLeft: sizes.unit * 4},

    margin: {margin: sizes.unit},
    marginT: {marginTop: sizes.unit},
    marginB: {marginBottom: sizes.unit},
    marginR: {marginRight: sizes.unit},
    marginL: {marginLeft: sizes.unit},
    marginH: {marginRight: sizes.unit, marginLeft: sizes.unit},
    marginV: {marginTop: sizes.unit, marginBottom: sizes.unit},

    margin2x: {margin: sizes.unit * 2},
    marginV2x: {marginTop: sizes.unit * 2, marginBottom: sizes.unit * 2},
    marginH2x: {marginRight: sizes.unit * 2, marginLeft: sizes.unit * 2},
    marginT2x: {marginTop: sizes.unit * 2},
    marginB2x: {marginBottom: sizes.unit * 2},
    marginR2x: {marginRight: sizes.unit * 2},
    marginL2x: {marginLeft: sizes.unit * 2},

    margin3x: {margin: sizes.unit * 3},
    marginV3x: {marginTop: sizes.unit * 3, marginBottom: sizes.unit * 3},
    marginH3x: {marginRight: sizes.unit * 3, marginLeft: sizes.unit * 3},
    marginT3x: {marginTop: sizes.unit * 3},
    marginB3x: {marginBottom: sizes.unit * 3},
    marginR3x: {marginRight: sizes.unit * 3},
    marginL3x: {marginLeft: sizes.unit * 3},

    margin4x: {margin: sizes.unit * 4},
    marginV4x: {marginTop: sizes.unit * 4, marginBottom: sizes.unit * 4},
    marginH4x: {marginRight: sizes.unit * 4, marginLeft: sizes.unit * 4},
    marginT4x: {marginTop: sizes.unit * 4},
    marginB4x: {marginBottom: sizes.unit * 4},
    marginR4x: {marginRight: sizes.unit * 4},
    marginL4x: {marginLeft: sizes.unit * 4},

    width100: {width: '100%'},

    row: {flexDirection: 'row'},
    rowReverse: {flexDirection: 'row-reverse'},
    column: {flexDirection: 'column'},
    columnReverse: {flexDirection: 'column-reverse'},

    flex: {flex: 1},
    flex2: {flex: 2},
    flex3: {flex: 3},
    flex4: {flex: 4},
    flex5: {flex: 5},

    flexWrap: {flexWrap: 'wrap'},
    spaceEvenly: {alignItems: 'space-evenly', justifyContent: 'space-evenly'},

    center: {justifyContent: 'center', alignItems: 'center'},
    centerV: {justifyContent: 'center'},
    centerH: {alignItems: 'center'},

    top: {justifyContent: 'flex-start'},
    bottom: {justifyContent: 'flex-end'},
    right: {alignItems: 'flex-end'},
    left: {alignItems: 'flex-start'},

    alignSelfCenter: {alignSelf: 'center'},
    alignSelfEnd: {justifyContent: 'flex-end'},
    alignSelfStart: {alignItems: 'flex-start'},

    textCenter: {textAlign: 'center'},
    textLeft: {textAlign: 'left'},
    textRight: {textAlign: 'right'},

    elevated: {
      boxShadow: '0px 2px 4px 0px #000',
      shadowColor: 'rgba(0, 0, 0, 0.55)',

      shadowOffset: {width: 0, height: 2},
      shadowRadius: 3,
      shadowOpacity: 0.25,
    },

    transparent: {backgroundColor: 'transparent'},

    primary: {backgroundColor: colors.primary},
    primaryContainer: {backgroundColor: colors.primaryContainer},

    secondary: {backgroundColor: colors.secondary},
    secondaryContainer: {backgroundColor: colors.secondaryContainer},

    tertiary: {backgroundColor: colors.tertiary},
    tertiaryContainer: {backgroundColor: colors.tertiaryContainer},

    danger: {backgroundColor: colors.danger},
    dangerContainer: {backgroundColor: colors.dangerContainer},

    warning: {backgroundColor: colors.warning},
    warningContainer: {backgroundColor: colors.warningContainer},

    success: {backgroundColor: colors.success},
    successContainer: {backgroundColor: colors.successContainer},

    disabled: {backgroundColor: colors.disabled},
    disabledContainer: {backgroundColor: colors.disabledContainer},

    info: {backgroundColor: colors.info},
    infoContainer: {backgroundColor: colors.infoContainer},

    surface: {backgroundColor: colors.surface},
    surfaceVariant: {backgroundColor: colors.surfaceVariant},

    background: {backgroundColor: colors.background},

    onPrimary: {color: colors.onPrimary},
    onPrimaryContainer: {color: colors.onPrimaryContainer},

    onSecondary: {color: colors.onSecondary},
    onSecondaryContainer: {color: colors.onSecondaryContainer},

    onTertiary: {color: colors.onTertiary},
    onTertiaryContainer: {color: colors.onTertiaryContainer},

    onDanger: {color: colors.onDanger},
    onDangerContainer: {color: colors.onDangerContainer},

    onWarning: {color: colors.onWarning},
    onWarningContainer: {color: colors.onWarningContainer},

    onSuccess: {color: colors.onSuccess},
    onSuccessContainer: {color: colors.onSuccessContainer},

    onDisabled: {color: colors.onDisabled},
    onDisabledContainer: {color: colors.onDisabledContainer},

    onInfo: {color: colors.onInfo},
    onInfoContainer: {color: colors.onInfoContainer},

    onSurface: {color: colors.onSurface},
    onSurfaceVariant: {color: colors.onSurfaceVariant},

    onBackground: {color: colors.onBackground},
  };

  return styles;
};

export default getModifierStyles;

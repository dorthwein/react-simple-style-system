A small and scalable bearbones styling system using  declaritive properties to apply styling. Has a comfy API based on hooks and drop in replacement components.

Much of this project came from dealing with common pitfalls associated with more opinionated UI Libraries that tend to be all or nothing solutions and can lead to dependency hell.

## Get Started
### Install
```
# npm
npm install react-simple-style-system

# yarn
yarn add react-simple-style-system
```

### Setup & Basic Usage
In App.js

```jsx
import {ThemeContainer, themes, View, Text} from 'react-simple-style-system';

{/* Create a custom UI element - Card */}
const Card = (props) => {
  return (
    <View rounded margin padding surface elevated {...props}>
      {props.children}
    </View>
  )
}

const App = () => {
  /* 
    Select a theme - this package comes with a light and dark theme.  
    See theming section on defining your own theme.
    
    Default Themes: 
      themes.Light;
      themes.Dark;
  */
  const theme = themes.Light; 

  return (
    <ThemeContainer theme={theme}>
      {/* Create a View with flex 1 and background using theme's background color */}
      <View flex background>              
        <Card>
          {/* Add a title and text to the card with correct text color */}
          <Text h1 onSurface>
            Title
          </Text>
          <Text body onSurface>
            A brief description of something
          </Text>
        </View>				
      </View>
    </ThemeContainer>
  )
}
```

### Apply modifiers to a regular component
```jsx
  import { TextInput } from 'react-native'
  import {useStyleModifiders } from 'react-simple-style-system'

  const CustomInput = (props) => {
    const styles = useStyleModifiers(props)
    return <TextInput {...props} style={styles} />
  }

  const ExampleUsage = (props) => {
    /* 
      Component will have theme margin, padding, borderRadius surfaceVariant background color, 
      and onSurfaceVariant text color applied to it along with the inline style.
    */
    return <CustomInput margin padding rounded surfaceVariant onSurfaceVariant style={{ fontSize: 24 }} />
  }
```

### Access the current Theme directly
```jsx
  import { Text } from 'react-native'
  import {useTheme } from 'react-simple-style-system'

  const CustomInput = (props) => {
    const { styles, colors, sizes, mode } = useTheme()    
    return <Text {...props} style={{ color: colors.onSurface, backgroundColor: colors.surface }} />
  }
```


### Create a custom theme
```jsx
const customTheme = {
    mode: 'light', // System Light or Dark Mode
    sizes: {
        unit: 4,  // Base unit size for margins and padding
        roundedRadius: 8, // Border radius when using `rounded` prop
        hairline: 0.25, // Outline width
        
        // Typography sizes
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
        onPrimary: "#242526",

        primaryContainer: '#F6F8FC',
        onPrimaryContainer: "#242526",

        secondary: '#D6E2FB',
        onSecondary: "#242526",

        secondaryContainer: '#EBF1FA',
        onSecondaryContainer: "#242526",

        tertiary: '#C7DAFC',
        onTertiary: "#242526",

        tertiaryContainer: '#F3F6FB',
        onTertiaryContainer: "#242526",

        background: '#F6F8FC',
        onBackground: "#242526",

        backgroundContainer: '#F6F8FC',
        onBackgroundContainer: "#242526",

        surface: '#FFFFFF',
        onSurface: "#242526",

        surfaceVariant: '#EFEFEF',
        onSurfaceVariant: "#242526",

        outline: 'rgba(0,0,0, 0.25)',

        danger: '#ff4c30',
        onDanger: "#FFFFFF",

        dangerContainer: '#f1a9a0',        
        onDangerContainer: "#FFFFFF",

        warning: "#f9b42d",
        onWarning: "#FFFFFF",

        warningContainer: '#fbc093',
        onWarningContainer: "#242526",

        success: '#66cc99',
        onSuccess: "#FFFFFF",

        successContainer: '#c8f7c5',
        onSuccessContainer: "#242526",

        disabled: 'rgba(0,0,0, 0.05)',
        onDisabled: 'rgba(0,0,0, 0.35)',

        disabledContainer: '#EFEFEF',
        onDisabledContainer: 'rgba(0,0,0, 0.35)',

        info: '#038aff',
        onInfo: "#FFFFFF",

        infoContainer: '#89c4f4',
        onInfoContainer: "#FFFFFF",
    },
};

```

### Complete list of props
```jsx
// Typography
h1
h2
h3
body
caption
label
textShadow

// Text styles
thin
bold
italic
lineThrough

// Border Radius
rounded
roundedT
roundedB
roundedR
roundedL

// Border Outline
outlined
outlinedT
outlinedB
outlinedR
outlinedL

// Applies padding based on theme { sizes: { unit: 4 } }
padding
paddingT
paddingB
paddingR
paddingL
paddingV
paddingH

padding2x
paddingT2x
paddingB2x
paddingR2x
paddingL2x
paddingV2x
paddingH2x

padding3x
paddingT3x
paddingB3x
paddingR3x
paddingL3x
paddingV3x
paddingH3x

padding4x
paddingT4x
paddingB4x
paddingR4x
paddingL4x
paddingV4x
paddingH4x

// Applies margin based on theme { sizes: { unit: 4 } }
margin
marginT
marginB
marginR
marginL
marginH
marginV

margin2x
marginV2x
marginH2x
marginT2x
marginB2x
marginR2x
marginL2x

margin3x
marginV3x
marginH3x
marginT3x
marginB3x
marginR3x
marginL3x

margin4x
marginV4x
marginH4x
marginT4x
marginB4x
marginR4x
marginL4x

// Flex directions
row
rowReverse
column

// 100% Width
width100

// Flex number
flex
flex2
flex3
flex4
flex5

// Flex Positioning
spaceEvenly
center
centerV
centerH
right
left
centerSelf
rightAlign
leftAlign
top
bottom
topAlign
bottomAlign
flexWrap

// Elevation
elevated

// Text Alignment
textCenter
textLeft
textRight

// Background Colors
transparent
primary
primaryContainer
secondary
secondaryContainer
tertiary
tertiaryContainer
danger
dangerContainer
warning
warningContainer
success
successContainer
disabled
disabledContainer
info
infoContainer
surface
surfaceVariant
background
backgroundContainer

// Text Colors
onPrimary
onPrimaryContainer
onSecondary
onSecondaryContainer
onTertiary
onTertiaryContainer
onDanger
onDangerContainer
onWarning
onWarningContainer
onSuccess
onSuccessContainer
onDisabled
onDisabledContainer
onInfo
onInfoContainer
onSurface
onsurfaceVariant
onBackground
onBackgroundContainer
```
src/components/ActivityIndicator
src/components/BooleanInput
src/components/DateTimeInput
src/components/Error
src/components/Form
src/components/Icon
src/components/InputContainer
src/components/MultiSelect
src/components/NumberInput
src/components/Pressable
src/components/SafeAreaView
src/components/ScrollView
src/components/Select
src/components/Text
src/components/TextAreaInput
src/components/TextInput
src/components/View

### Why react-simple-style-system
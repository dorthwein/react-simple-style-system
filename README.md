A small and scalable bearbones styling system using  declaritive properties to apply styling. Has a comfy API based on hooks and drop in replacement components.

Much of this project came from dealing with common pitfalls associated with more opinionated UI Libraries that tend to be all or nothing solutions and can lead to dependency hell.

Currently only supports react-native

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

## Applying Styles

### Typography
Apply fontSize to text
- `h1`
- `h2`
- `h3`
- `body`
- `caption`
- `label`

```
const theme = { 
  sizes: { 
    h1: 32,
    h2: 24,
    h3: 18,
    body: 14,
    caption: 12,
    label: 14,
  } 
}
```
### Text Styles
Apply text styles to text
- `thin`
- `bold`
- `italic`
- `textShadow`
- `lineThrough`

### Text Alignment
Apply text alignment
- `textCenter`
- `textLeft`
- `textRight`


### Text Example
```jsx
<Text h1 italic textCenter>
  H1 Italic Example
</Text>
```

### Border Radius
Apply border radius based on theme rounded radius
- `rounded` (All)
- `roundedT` (Top)
- `roundedB` (Bottom)
- `roundedR` (Right)
- `roundedL` (Left)
```
const theme = { sizes: { roundedRadius: 8 } } 
```

### Border Outline
Apply border outline

- `outline`   (All)
- `outlineT`  (Top)
- `outlineB`  (Bottom)
- `outlineR`  (Right)
- `outlineL`  (Left)

### Elevation
Apply elevation shadow effect
- `elevated`

### Padding
Apply padding based on theme unit 
- `padding` (All)
- `paddingT` (Top)
- `paddingB` (Bottom)
- `paddingR` (Right)
- `paddingL` (Left)
- `paddingV` (Vertical)
- `paddingH` (Horizontal)
```
const theme = { sizes: { unit: 4 } };
```

### Padding2x
Apply padding based on theme unit x 2
- `padding2x` (All)
- `paddingT2x` (Top)
- `paddingB2x` (Bottom)
- `paddingR2x` (Right)
- `paddingL2x` (Left)
- `paddingV2x` (Vertical)
- `paddingH2x` (Horizontal)

### Padding3x
Apply padding based on theme unit x 3
- `padding3x` (All)
- `paddingT3x` (Top)
- `paddingB3x` (Bottom)
- `paddingR3x` (Right)
- `paddingL3x` (Left)
- `paddingV3x` (Vertical)
- `paddingH3x` (Horizontal)

### Padding 4x
Apply padding based on theme unit x 4
- `padding4x` (All)
- `paddingT4x` (Top)
- `paddingB4x` (Bottom)
- `paddingR4x` (Right)
- `paddingL4x` (Left)
- `paddingV4x` (Vertical)
- `paddingH4x` (Horizontal)


### Margin
Apply margin based on theme unit 
- `margin` (All)
- `marginT` (Top)
- `marginB` (Bottom)
- `marginR` (Right)
- `marginL` (Left)
- `marginV` (Vertical)
- `marginH` (Horizontal)
```
const theme = { sizes: { unit: 4 } };
```

### Margin2x
Apply margin based on theme unit x 2
- `margin2x` (All)
- `marginT2x` (Top)
- `marginB2x` (Bottom)
- `marginR2x` (Right)
- `marginL2x` (Left)
- `marginV2x` (Vertical)
- `marginH2x` (Horizontal)

### Margin3x
Apply margin based on theme unit x 3
- `margin3x` (All)
- `marginT3x` (Top)
- `marginB3x` (Bottom)
- `marginR3x` (Right)
- `marginL3x` (Left)
- `marginV3x` (Vertical)
- `marginH3x` (Horizontal)

### Margin 4x
Apply margin based on theme unit x 4
- `margin4x` (All)
- `marginT4x` (Top)
- `marginB4x` (Bottom)
- `marginR4x` (Right)
- `marginL4x` (Left)
- `marginV4x` (Vertical)
- `marginH4x` (Horizontal)

### Flex
Apply display flex and flex number
- `flex`
- `flex2`
- `flex3`
- `flex4`
- `flex5`


### Flex Directions
Apply flex direction
- `row`
- `rowReverse`
- `column`
- `columnReverse`

### Width
Apply width
- `width100`

### Flex Positioning
Apply flex positioning
- `center`
- `centerV`
- `centerH`
- `top`
- `bottom`
- `right`
- `left`
- `alignSelfCenter`
- `alignSelfEnd`
- `alignSelfStart`
- `spaceEvenly`
- `flexWrap`

### Theme Colors
Apply background & Text colors

**Theme Background Colors**
- `primary`
- `primaryContainer`
- `secondary`
- `secondaryContainer`
- `tertiary`
- `tertiaryContainer`
- `surface`
- `surfaceVariant`
- `background`
- `transparent`

**Theme Text Colors**
- `onPrimary`
- `onPrimaryContainer`
- `onSecondary`
- `onSecondaryContainer`
- `onTertiary`
- `onTertiaryContainer`
- `onSurface`
- `onSurfaceVariant`
- `onBackground`


```
const theme = {
  colors: {
    primary: '#FFFFFF',
    primaryContainer: '#F6F8FC',
    secondary: '#D6E2FB',
    secondaryContainer: '#EBF1FA',
    tertiary: '#C7DAFC',
    tertiaryContainer: '#F3F6FB',
    surface: '#FFFFFF',
    surfaceVariant: '#EFEFEF',
    background: '#F6F8FC',

    onPrimary: '#242526,
    onPrimaryContainer: '#242526,
    onSecondary: '#242526,
    onSecondaryContainer: '#242526,
    onTertiary: '#242526,
    onTertiaryContainer: '#242526, 
    onSurface: '#242526',
    onSurfaceVariant: '#242526',
    onBackground: '#242526',
  }
}
```

**Semantic Background Colors**
- `info`
- `infoContainer`
- `success`
- `successContainer`
- `warning`
- `warningContainer`
- `danger`
- `dangerContainer`
- `disabled`
- `disabledContainer`

**Semantic Text Colors**
- `onInfo`
- `onInfoContainer`
- `onSuccess`
- `onSuccessContainer`
- `onWarning`
- `onWarningContainer`
- `onDanger`
- `onDangerContainer`
- `onDisabled`
- `onDisabledContainer`

```
const theme = {
  colors: {
    info: '#038aff',
    infoContainer: '#89c4f4',
    success: '#66cc99',
    successContainer: '#c8f7c5',
    warning: "#f9b42d",
    warningContainer: '#fbc093',
    danger: '#ff4c30',
    dangerContainer: '#f1a9a0',
    disabled: 'rgba(0,0,0, 0.05)',
    disabledContainer: '#EFEFEF',

    onInfo: '#FFFFFF',
    onInfoContainer: '#FFFFFF',    
    onSuccess: '#FFFFFF',
    onSuccessContainer: '#242526',
    onWarning: '#FFFFFF',
    onWarningContainer: '#242526',
    onDanger: '#FFFFFF',
    onDangerContainer: '#FFFFFF',
    onDisabled: 'rgba(0,0,0, 0.35)',
    onDisabledContainer: 'rgba(0,0,0, 0.35)',
  }
}
```

### Coloring example
```jsx
// Card example with warning text at the bottom
<View flex background padding>
  <View surface rounded padding elevated>
    <Text h1 onSurface>
      This is some information on a card!
    </Text>

    <View warning padding rounded margin>
      <Text body onWarning>
        This is some warning text!
      </Text>
    </View>
  </View>
</View>
```

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
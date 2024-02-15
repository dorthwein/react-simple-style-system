A small and scalable bearbones styling system using  declaritive properties to apply styling. Has a comfy API based on hooks and drop in replacement components.

Much of this project came from dealing with common pitfalls associated with more opinionated UI Libraries that tend to be all or nothing solutions.

## Get Started
### Install
```
# npm
npm install react-simple-style-system

# yarn
yarn add react-simple-style-system
```

### Setup
In App.js

```jsx
import {ThemeContainer, themes, View, Text} from 'react-simple-style-system';

const App = () => {
	/* 
		Select a theme - this package comes with a light and dark theme.  
		See theming section on defining your own therme
	*/
	const theme = themes.Light;
	
	return (
		<ThemeContainer theme={theme}>
			{/* Create a View with flex 1 and background using theme's background color */}
			<View flex background>
	
				{/* Create a card like view with padding and margin */}
				<View rounded margin padding surface elevated>
		
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

### Why react-simple-style-system

# React Native

React Native is a JavaScript framework for building native mobile applications for iOS and Android platforms. It allows developers to use React along with native platform capabilities to build cross-platform mobile apps.
Ref Docs: https://reactnative.dev/docs/getting-started

#### Components

### Text

The Text component is used to display text in your React Native application. It supports basic text styling and can be customized using stylesheets.

```javascript
import { Text } from 'react-native';

<Text>Hello, world!</Text>
```
Ref Docs: https://reactnative.dev/docs/text

### View

The View component is a fundamental building block for creating UI layouts in React Native. It's similar to `<div>` in web development and is used to structure and style your UI components.

```javascript
import { View } from 'react-native';

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  {/* Your UI components here */}
</View>
```
Ref Docs: https://reactnative.dev/docs/view

### TouchableOpacity

TouchableOpacity is a wrapper component that responds to touch events. It provides feedback by reducing opacity when pressed. It's commonly used for buttons and interactive elements.

```javascript
import { TouchableOpacity, Text } from 'react-native';

<TouchableOpacity onPress={() => console.log('Button pressed')}>
  <Text>Press me</Text>
</TouchableOpacity>
```
Ref Docs: https://reactnative.dev/docs/touchableopacity

### Image

The Image component is used to display images in your React Native application. It supports various sources like local files, network images, and static resources.

```javascript
import { Image } from 'react-native';

<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 200, height: 200 }}
/>
```
Ref Docs: https://reactnative.dev/docs/image

### ScrollView

ScrollView is a component that provides a scrolling container for content that is larger than the screen. It's useful for displaying long lists or content that needs to be scrollable.

```javascript
import { ScrollView, Text } from 'react-native';

<ScrollView>
  <Text>Scroll me!</Text>
</ScrollView>
```
Ref Docs: https://reactnative.dev/docs/scrollview

## Stylesheet

React Native uses the `StyleSheet` API for styling components. It's similar to CSS but with a few differences. You can define styles as objects and apply them to components.

Ref Docs: https://reactnative.dev/docs/style

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
```

Then, apply styles to components using the `style` prop:

```javascript
<View style={styles.container}>
  <Text style={styles.text}>Styled text</Text>
</View>
```

# Assignment 4

React Native Project Assignment 4

## Component Description 
A brief description of each component's usage 

### 1. View
I used `View` as a container for other components to be stored in. 

### 2. Text
I used the `Text` component to display text in my app.

### 3. ScrollView
I used the `ScrollView` component to make all the contents after the View component styled `profile` scrollable.

### 4. TextInput
I used the `TextInput` component to allow users to input text in the searchbox.

### 5. StyleSheet
I used the `StyleSheet` to style my components.

### 6. Touchable Opacity 
I used the touchable opacity to create touchable buttons. 
Mainly the component styled `button` in the `LoginScreen` to allow users to move to the `HomeScreen` with a touch of the `button` using the `onPress` function.
The other touchable opacity components in my code do not have any `onPress` function yet.

### 7. FlatList 
I used the `FlatList` to render list of data in my `HomeScreen`. 
They are the `FeaturedJobsData` and `PopularJobsData`.  

### 8. Image
I used the `Image` component to display images and icons in the app. 

### 9. CreateStackNavigator 
The `stack.Navigator` manages a stack of screens, alllowing navigation between them. I used the `createStackNavigator` to implement stack-based navigation in the app.  

### 10. Navigation Container
I used  the `NavigationConainer` to wrap the navigation components and manage their state. 

### 11. UseState 
I used the `useState` to manage the state of the `name` and `email` in the `LoginScreen`, which automatically changes when the state changes. 

### 13. Parameters
I used the `route` and `route.params` in the `HomeScreen` to access the `name` and `email` from the `LoginScreen`
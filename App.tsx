import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App(): React.JSX.Element {
  const Homestack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Homestack.Navigator initialRouteName="Home">
        <Homestack.Screen name="Home" component={HomeScreen} />
        <Homestack.Screen name="About" component={AboutScreen} />
        <Homestack.Screen name="CreatePost" component={CreatePostScreen} />
      </Homestack.Navigator>
    </NavigationContainer>
  );
}

export default App;

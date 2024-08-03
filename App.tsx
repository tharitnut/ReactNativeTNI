import { View, Text } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";

function App(): React.JSX.Element  {
  

  return (
    <View>
      <ProfileScreen />
      <Text>{'\n'}</Text>
    </View>
  );
};

export default App;

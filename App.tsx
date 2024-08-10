import { View, Text } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import FlatListExample from "./components/FlatListExample";
import FlatListCallBackend from "./components/FlatListcallBackend";

function App(): React.JSX.Element  {
  

  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <FlatListExample/> */}
      <FlatListCallBackend/>
    </View>
  );
};

export default App;

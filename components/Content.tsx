import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylePractice } from "../styles/styles";

type AppContentProp = {
  message: string;
  fullname: string;
};

const Content = ({ message, fullname }: AppContentProp): React.JSX.Element => {
  const [displayFullname, setDisplayFullname] = React.useState("");

  const haddleButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert("Hello", `Fullname has change to : ${fullname}`);
  };

  return (
    <View style={stylePractice.content}>
      <Text style={stylePractice.text}>{message}</Text>
      <Text style={stylePractice.text}>{displayFullname}</Text>
      <Button title="Click Me" onPress={haddleButtonClick} color="blue" />
    </View>
  );
};

export default Content;

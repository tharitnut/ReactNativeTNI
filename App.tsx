import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  const onClickMe = () => {
    Alert.alert("Hello", "Tharit Ruangphungluang");
  };


  return (
    <View style={styles.container}>
      <AppHeader title = "Input your fullname" title2 = "Message from App.tsx"/>
      <Content title="Message from App.tsx" name ="Tharit Ruangphungluang"/>
      <AppFooter title = "Thai-Nichi Institute of Technology"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

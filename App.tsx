import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylePractice } from "./styles/styles";

function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setmessage] = useState("Message from App.tsx");
  const [footerMessage, setfooterMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has change to : ${fullname}`);
  }, [fullname]); //run when fullname changes

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      <Content message={message} fullname={fullname} />
      <AppFooter footerMessage={footerMessage} />
      <View style = {{alignItems:"center"}}>
        <TextInput
          style={stylePractice.input}
          placeholder="Enter your fullname"
          value={fullname}
          onChangeText={setFullname}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;

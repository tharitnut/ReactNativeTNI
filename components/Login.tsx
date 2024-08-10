import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ValildateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email);
  };

  const handleSubmit = () => {
    let errorMessage = "";
    if (!fullname) {
      errorMessage = "Please Enter Name\n";
    }
    if (!email) {
      errorMessage += "Please Enter Email\n";
    }else if(!ValildateEmail(email)){
      errorMessage += "Invalid Email Format\n";
    }
    if (!password) {
      errorMessage += "Please Enter Password\n";
    } else if (password.length < 6) {
      errorMessage += "Password must be at least 6 letter";
    }
    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);

    /* if(!fullname&&!email){
      Alert.alert("Error", "Please Enter Name\nPlease Enter Email", [{ text: "OK" }]);
      return;
    }
    if (!fullname) {
      Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]);
      return; //break
    }
    if (!email) {
      Alert.alert("Alert", "Please Enter Email", [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]); */

    /* !fullname?Alert.alert("Please Enter Name","Please Enter Name",[{text:"OK"}])
    :!email?Alert.alert("Please Enter Email")
    :Alert.alert("Success"); */
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="SUBMIT" onPress={handleSubmit} color="blue" />
    </View>
  );
};

export default Login;

import { View, Text, TextInput,Button, Alert } from "react-native";
import React,{useState} from "react";
import { stylesLogin } from "../styles/styles";

const Login = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    !fullname?Alert.alert("Please Enter Name"):!email?Alert.alert("Please Enter Email"):Alert.alert("Success");
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
      />
      <Button title="Submit" onPress={handleSubmit} color="blue" />
    </View>
  );
};

export default Login;

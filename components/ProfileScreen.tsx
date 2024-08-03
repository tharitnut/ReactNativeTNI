import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import {stylesProfile} from "../styles/styles";
import Login from "./Login";

const ProfileScreen = (): React.JSX.Element => {
  const proflieImage1 = require("../assets/Profile.jpg");
  const profileImage2 = require("../assets/NewProfile.jpg")
  const [name, setName] = useState("Tharit Ruangphungluang");
  const [img, setImg] = useState(proflieImage1);

  const handleChangeName = () => {
    setName(name == "Tharit Ruangphungluang"?"Nut":"Tharit Ruangphungluang");
  };
  const handleChangeImage = () => {
    setImg(img == proflieImage1?profileImage2:proflieImage1);
  };

  return (
    <View style={stylesProfile.container}>
      <View style={stylesProfile.profileContainer}>
        <Image source={img} style={stylesProfile.profileImage} />
        <View>
          <Text style={stylesProfile.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} color="blue"></Button>
          <Text style={{fontSize:4}}>{"\n"}</Text>
          <Button title="Change Image" onPress={handleChangeImage} color="blue"></Button>
        </View>
      </View>
      <Login/>
    </View>
  );
};

export default ProfileScreen;

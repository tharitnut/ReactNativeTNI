import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const proflieImage1 = require("../assets/Profile.jpg");
  const profileImage2 = require("../assets/NewProfile.jpg")
  const [name, setName] = useState("Tharit Ruangphungluang");
  const [img, setImg] = useState(proflieImage1);

  const handleChangeName = () => {
    setName("New Name");
  };
  const handleChangeImage = () => {
    setImg(profileImage2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={img} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName}></Button>
          <Text>{"\n"}</Text>
          <Button title="Change Image" onPress={handleChangeImage}></Button>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

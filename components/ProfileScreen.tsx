import { Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const proflieImage = require("../assets/Profile.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={proflieImage} style={styles.profileImage}/>
        <Text style={styles.profileName}>Tharit Ruangphungluang</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

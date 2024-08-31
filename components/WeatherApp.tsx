import { StyleSheet, Text, View, Alert, Modal, Pressable, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import WeatherLondon from "./WeatherLondon";
import WeatherBangkok from "./WeatherBangkok";

const WeatherApp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const toggleModal = (city: string) => {
    setSelectedCity(city);
    setModalVisible(true);
  };

  const renderWeatherComponent = () => {
    if (selectedCity === "London") {
      return <WeatherLondon />;
    } else if (selectedCity === "Bangkok") {
      return <WeatherBangkok />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weahter App</Text>
      <Pressable
        style={[styles.button, styles.button]}
        onPress={() => {
          setModalVisible(true),
            toggleModal("London")
        }}
      >
        <Text style={styles.buttonText}>London</Text>
      </Pressable>
      <Pressable
        style={[styles.button]}
        onPress={() => {
          setModalVisible(true),
            toggleModal("Bangkok")
        }}
      >
        <Text style={styles.buttonText}>Bangkok</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
            {renderWeatherComponent()}
            <TouchableOpacity
            style={[styles.closeButton]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
            </View>
            
        </View>
      </Modal>
    </View>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#3AA6B9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

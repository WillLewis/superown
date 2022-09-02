import React from "react";
import { Image, StyleSheet, ImageBackground, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function App() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      blurRadius={10}
      resizeMode="cover"
      style={styles.bgimage}
    >
      <View style={styles.logocontainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logoimage}
        ></Image>
        <Text style={styles.greeting}>Welcome bitches</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>

      <View style={styles.registerbutton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    width: "100%",
    padding: 20
  },
  logoimage: {
    height: 70,
    width: 70,
    marginBottom: 20
  },
  logocontainer: {
    position: "absolute",
    top: 100,
    alignItems: "center"
  },
  greeting: {
    color: "#889",
    fontSize: 25,
    fontWeight: "450",
    textAlign: "center"
  }
});

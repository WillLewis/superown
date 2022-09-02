import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.appButton, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButton: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 10
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 12,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
export default AppButton;

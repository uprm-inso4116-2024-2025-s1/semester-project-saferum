import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React = require("react");

const { width } = Dimensions.get("window");

const RoleSelection = () => {
  const [scaleValueUser] = useState(new Animated.Value(1));
  const [scaleValueAdmin] = useState(new Animated.Value(1));
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>
      <View style={styles.buttonsContainer}>
        <Animated.View style={[styles.buttonWrapper, { transform: [{ scale: scaleValueUser }] }]}>
          <TouchableOpacity
            style={[styles.button, styles.userButton]}
          >
            <Ionicons name="person-circle" size={30} color="#fff" />
            <Text style={styles.buttonText}>User</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.buttonWrapper, { transform: [{ scale: scaleValueAdmin }] }]}>
          <TouchableOpacity
            style={[styles.button, styles.adminButton]}
          >
            <Ionicons name="briefcase" size={30} color="#fff" />
            <Text style={styles.buttonText}>Admin</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    letterSpacing: 1.5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width * 0.8,
  },
  buttonWrapper: {
    width: width * 0.35,
  },
  button: {
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: "#009c4f",
  },
  userButton: {
    backgroundColor: "#009c4f",
  },
  adminButton: {
    backgroundColor: "#009c4f",
  },
  buttonText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default RoleSelection;


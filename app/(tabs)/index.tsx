import { Image, StyleSheet, Platform, Text, TextInput, SafeAreaView, Button, Dimensions, Alert } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";

import { Link, useRouter } from "expo-router";
import { CONTAINER_WIDTH, SCREEN_WIDTH } from "@/constants/dimentions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const fontColor = useThemeColor({}, "text");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const router = useRouter();

  async function toTOHome() {
    if (!email.includes("@") || email.length < 5 || !email.includes(".")) {
      Alert.alert("Incorrect Email");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Short Password", "It should be longer then 6 characters");
      return;
    }

    const storedEmail = await AsyncStorage.getItem("email");
    const storedPassword = await AsyncStorage.getItem("password");

    if (storedEmail != email || storedPassword != password) {
      Alert.alert(`Incorrect Credentials`);

      return;
    }

    router.replace("/Home");
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={require("@/assets/images/sea.jpeg")} style={styles.reactLogo} />}
    >
      <ThemedText type="title">Login</ThemedText>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">Email</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} />
        </SafeAreaView>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">Password</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={onChangePassword} value={password} />
        </SafeAreaView>
      </ThemedView>

      <Button title="Login" onPress={toTOHome}></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: SCREEN_WIDTH,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 8,
    borderColor: "white",
    width: CONTAINER_WIDTH,
    color: "white",
  },
});

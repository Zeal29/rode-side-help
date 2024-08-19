import { Image, StyleSheet, Platform, Text, TextInput, SafeAreaView, Button, Pressable } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { SCREEN_WIDTH } from "@/constants/dimentions";

export default function HomeScreen() {
  const fontColor = useThemeColor({}, "text");
  const [text, onChangeText] = useState("");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={require("@/assets/images/hands.jpeg")} style={styles.reactLogo} />}
    >
      <Pressable style={styles.getHelp}>
        <ThemedText type="title">Get Help</ThemedText>
      </Pressable>
      <Button title="Update Contacts"></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    width: 250,
    color: "white",
  },

  getHelp: {
    backgroundColor: "rgb(204, 84, 33)",
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 300,
    margin: "auto",
  },
});

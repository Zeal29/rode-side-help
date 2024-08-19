import { Image, StyleSheet, Platform, Text, TextInput, SafeAreaView, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { CONTAINER_WIDTH, SCREEN_WIDTH } from "@/constants/dimentions";

export default function HomeScreen() {
  const fontColor = useThemeColor({}, "text");
  const [text, onChangeText] = useState("");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={require("@/assets/images/sea.jpeg")} style={styles.reactLogo} />}
    >
      <ThemedText type="title">Sign Up</ThemedText>

      <ThemedView>
        <ThemedText type="default">Email</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        </SafeAreaView>
      </ThemedView>

      <ThemedView>
        <ThemedText type="default">Phone No.</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        </SafeAreaView>
      </ThemedView>

      <ThemedView>
        <ThemedText type="default">Password</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        </SafeAreaView>
      </ThemedView>

      <Button title="Sign up"></Button>
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
    marginTop: 10,
    borderWidth: 1,
    padding: 8,
    borderColor: "white",
    width: CONTAINER_WIDTH,
    color: "white",
  },
});

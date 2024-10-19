import { Image, StyleSheet, Platform, Text, TextInput, SafeAreaView, Button, Alert } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, useRouter } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useEffect, useState } from "react";
import { CONTAINER_WIDTH, SCREEN_WIDTH } from "@/constants/dimentions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const fontColor = useThemeColor({}, "text");
  const [email, onChangeEmail] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [currentPassword, onChangeCurrentPassword] = useState("");
  const [phone, onChangePhone] = useState("");

  const route = useRouter();

  useEffect(() => {
    AsyncStorage.getItem("email").then((x) => x && onChangeEmail(x));
    AsyncStorage.getItem("phone").then((x) => x && onChangePhone(x));
  }, []);

  async function onChangeProfile() {
    if (phone.length < 11 || phone.length > 12) {
      Alert.alert("Phone no. should be more then 11 digit.");
      return;
    }

    if (!email.includes("@") || email.length < 5 || !email.includes(".")) {
      Alert.alert("Incorrect Email");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Short new Password", "It should be longer then 6 characters");
      return;
    }

    const storedPassword = await AsyncStorage.getItem("password");

    if (storedPassword != currentPassword) {
      Alert.alert(`Incorrect Credentials`);

      return;
    }

    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", newPassword);
    await AsyncStorage.setItem("phone", phone);

    onChangeNewPassword("");
    onChangeCurrentPassword("");

    Alert.alert(`Profile updated successfully`);
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={require("@/assets/images/sea.jpeg")} style={styles.reactLogo} />}
    >
      <ThemedText type="title">Edit Profile</ThemedText>

      <ThemedView>
        <ThemedText type="default">*Email</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} />
        </SafeAreaView>
      </ThemedView>

      <ThemedView>
        <ThemedText type="default">*Phone No.</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangePhone} value={phone} />
        </SafeAreaView>
      </ThemedView>

      <ThemedView>
        <ThemedText type="default">*New Password</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangeNewPassword} value={newPassword} />
        </SafeAreaView>
      </ThemedView>

      <ThemedView>
        <ThemedText type="default">Current Password (required)</ThemedText>

        <SafeAreaView>
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={onChangeCurrentPassword} value={currentPassword} />
        </SafeAreaView>
      </ThemedView>

      <Button title="Change" onPress={onChangeProfile}></Button>
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
    marginTop: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "white",
    width: CONTAINER_WIDTH,
    color: "white",
  },
});

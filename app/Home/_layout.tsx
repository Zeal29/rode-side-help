import { Stack, Link, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Button, Pressable, Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        statusBarTranslucent: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",

          headerRight: () => (
            <ThemedView>
              <Button title="Edit Profile" onPress={() => router.push("/Home/edit-profile")}></Button>
            </ThemedView>
          ),
        }}
      />
      <Stack.Screen
        name="edit-profile"
        options={{
          headerTitle: "Edit Profile",
        }}
      />
    </Stack>
  );
}

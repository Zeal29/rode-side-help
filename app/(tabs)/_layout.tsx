import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon library="Entypo" name={"login"} color={color} />
            ) : (
              <TabBarIcon library="MaterialIcons" name={"login"} color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="signup"
        options={{
          title: "sign up",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon library="MaterialCommunityIcons" name={"pencil-plus"} color={color} />
            ) : (
              <TabBarIcon library="MaterialCommunityIcons" name={"pencil-plus-outline"} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

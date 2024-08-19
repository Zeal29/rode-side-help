// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { ReactHTMLElement, type ComponentProps } from "react";
import { Text } from "react-native";

export const iconLibraryMap = {
  Ionicons,
  Octicons,
  Entypo,
};

export type IconLibraryName = keyof typeof iconLibraryMap;
export type IconLibrary = (typeof iconLibraryMap)[IconLibraryName];

export function TabBarIcon2<T extends IconLibraryName>({
  style,
  library,
  ...rest
}: IconProps<ComponentProps<(typeof iconLibraryMap)[T]>["name"]> & { library: T }) {
  const Comp: any = iconLibraryMap[library];
  return <Comp size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function TabBarIcon5<T extends IconLibraryName>({ library }: { library: T }) {
  const Comp: any = iconLibraryMap[library];
}

export function TabBarIcon({
  library,
  style,
  ...rest
}: IconProps<ComponentProps<typeof MaterialCommunityIcons>["name"]> & { library: "MaterialCommunityIcons" }): any;
export function TabBarIcon({ library, style, ...rest }: IconProps<ComponentProps<typeof MaterialIcons>["name"]> & { library: "MaterialIcons" }): any;
export function TabBarIcon({ library, style, ...rest }: IconProps<ComponentProps<typeof Ionicons>["name"]> & { library: "Ionicons" }): any;
export function TabBarIcon({ library, style, ...rest }: IconProps<ComponentProps<typeof Octicons>["name"]> & { library: "Octicons" }): any;
export function TabBarIcon({ library, style, ...rest }: IconProps<ComponentProps<typeof Entypo>["name"]> & { library: "Entypo" }): any;
export function TabBarIcon({ library, style, ...rest }: any) {
  if (library == "Ionicons") {
    return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }

  if (library == "Octicons") {
    return <Octicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }

  if (library == "Entypo") {
    return <Entypo size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }

  if (library == "MaterialIcons") {
    return <MaterialIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }

  if (library == "MaterialCommunityIcons") {
    return <MaterialCommunityIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }

  return <Text>No Icon</Text>;
}

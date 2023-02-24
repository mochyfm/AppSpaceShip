import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Palette } from "../Themes/main.themes";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient
      colors={[
        Palette.degradedColorDarker,
        Palette.degradedColorLigther,
        Palette.degradedColorDarker,
      ]}
      start={{ x: 0, y: 2 }}
      end={{ x: 10, y: 2 }}
      style={styles.profileContainer}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "#000",
    display: "flex",
    height: "100%",
  },
});

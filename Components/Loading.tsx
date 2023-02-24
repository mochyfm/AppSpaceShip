import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Palette } from "../Themes/main.themes";
import GradientBackground from "./GradientBackground";

interface Props {
  isLoading: boolean;
  children: React.ReactNode;
}
/**
 * @param isLoading Se encarga de mantener el componente mientras el estado se mantenga activo
 * @returns React.FC<Props>
 */
const Loading: React.FC<Props> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <GradientBackground>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            size="large"
            color={Palette.loadingColor}
          />
        </View>
      </GradientBackground>
    );
  }

  return <>{children}</>;
};

export default Loading;

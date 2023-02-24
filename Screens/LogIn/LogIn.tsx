import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import { useState } from "react";
import * as RootNavigation from "../../services/main.service";
import { Palette } from "../../Themes/main.themes";

export function LogIn({ onLogin }: { onLogin: Function }) {
  const [token, setToken] = useState<string>("");

  const handleInput = (token: string): void => {
    setToken(token);
  };

  const handleSubmit = (): void => {
    if (token.trim() !== "") {
      onLogin(token);
      setToken("");
    } else ToastAndroid.show("Escriba un token válido.", ToastAndroid.BOTTOM);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logInSection}>
          <View>
            <Text style={styles.infoMessage}>Introduce your token</Text>
          </View>
          <TextInput
            style={styles.userInput}
            placeholder="Tu Token"
            onChangeText={handleInput}
            value={token}
          />
          <Pressable style={styles.logButton} onPress={handleSubmit}>
            <Text style={styles.logButtonText}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Palette.logInBackgroundColor,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  logInSection: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "70%",
    width: "100%",
  },
  infoMessage: {
    color: Palette.logInInfoMessage,
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 30,
  },
  userInput: {
    alignSelf: "center",
    backgroundColor: Palette.inputBorderColor,
    borderRadius: 15,
    borderColor: Palette.inputBorderColor,
    borderWidth: 1,
    display: "flex",
    padding: 15,
    width: "70%",
  },
  logButton: {
    alignItems: "center",
    backgroundColor: Palette.logInButtonBackgroundColor,
    borderRadius: 15,
    display: "flex",
    marginTop: 50,
    padding: 15,
    width: "70%",
  },
  logButtonText: {
    color: Palette.logInButtonFontColor,
  },
});

export default LogIn;

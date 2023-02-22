import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, ToastAndroid, View } from "react-native";
import { useState } from "react";
import MainScreen from "./Screens/MainScreen";
import LogIn from "./Screens/LogIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import * as SecureStorage from "expo-secure-store";
import { claimUser, navigate, navigationRef } from "./services/main.service";
import { PilotData, PilotProfile } from "./Types/Types";

const TOKEN_KEY = "pilotToken";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [pilotProfile, setPilotProfile] = useState<PilotProfile>();

  const handleSignIn = (username: string) => {
    const retrieveUser = async () => {
      claimUser(username).then((userdata) => {
        if (userdata !== null) {
          setPilotProfile(userdata.user);
          navigate("Home");
        } else {
          ToastAndroid.show("El usuario ya existe", ToastAndroid.BOTTOM);
        }
      }).catch((err) => console.log(err));
    };

    retrieveUser();
  };

  const handlelogin = (token: string) => {
    console.log(token);
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.backgroundColor} />
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* CREATING A STACK NAVIGATOR WITH A DRAWER NAVIGATOR INSIDE */}
        {/* SOURCE: https://reactnavigation.org/docs/hiding-tabbar-in-screens */}
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LogIn">
          {() => <LogIn onLogin={handlelogin} />}
        </Stack.Screen>
        <Stack.Screen name="SignIn">
          {() => <SignIn onSignIn={handleSignIn} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {() => <Home profile={pilotProfile} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#000",
  },
});

import { NavigationContainer } from "@react-navigation/native";
import {
  StatusBar,
  StyleSheet,
  ToastAndroid,
  View,
} from "react-native";
import { useState } from "react";
import MainScreen from "./Screens/MainScreen";
import LogIn from "./Screens/LogIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import * as SecureStorage from "expo-secure-store";
import {
  checkIfUserExists,
  claimUser,
  navigate,
  navigationRef,
} from "./services/main.service";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [userToken, setUserToken] = useState<string>();

  const handleSignIn = (username: string) => {
    const checkIfUserIsTaken = async () => {
      claimUser(username)
        .then((userdata) => {
          if (userdata !== null) {
            setUserToken(userdata.token);
            ToastAndroid.show("¡ Usuario creado !", ToastAndroid.BOTTOM);
            navigate("Home");
          } else {
            ToastAndroid.show("El usuario ya existe", ToastAndroid.BOTTOM);
          }
        })
        .catch((err) => console.log(err));
    };

    userToken === undefined && checkIfUserIsTaken();
  };

  const handlelogin = (token: string) => {
    const retrieveDataWithToken = async () => {
      checkIfUserExists(token).then((exists) => {
        if (exists) {
          setUserToken(token);
          ToastAndroid.show("¡ Bienvenido a SpaceTraders !", ToastAndroid.BOTTOM);
          navigate("Home");
        } else {
          ToastAndroid.show(
            "El token no corresponde a un usuario válido",
            ToastAndroid.BOTTOM
          );
        }
      });
    };

    userToken === undefined && retrieveDataWithToken();
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
          {() => <Home userToken={userToken} setUserToken={setUserToken} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColor: {
    backgroundColor: "#000",
  },
});

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, ToastAndroid, View } from "react-native";
import { useEffect, useState } from "react";
import MainScreen from "./Screens/MainScreen";
import LogIn from "./Screens/LogIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import * as SecureStorage from "expo-secure-store";
import {
  TOKEN_KEY,
  checkIfUserExists,
  claimUser,
  navigate,
  navigationRef,
} from "./services/main.service";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [userToken, setUserToken] = useState<string | null>("");
  const [storedToken, setStoredToken] = useState<boolean>(false);

  const handleSignIn = (username: string) => {
    console.log(userToken);
    const checkIfUserIsTaken = async () => {
      claimUser(username)
        .then((userdata) => {
          if (userdata !== null) {
            SecureStorage.setItemAsync(TOKEN_KEY, userdata.token)
              .then(() => {
                setUserToken(userdata.token);
                setStoredToken(true);
                ToastAndroid.show("¡ Usuario creado !", ToastAndroid.BOTTOM);
                navigate("Home");
              })
              .catch((error) => console.log(error));
          } else {
            ToastAndroid.show("El usuario ya existe", ToastAndroid.BOTTOM);
          }
        })
        .catch((err) => console.log(err));
    };

    userToken?.trim() === "" && checkIfUserIsTaken();
  };

  const handlelogin = (token: string) => {
    const retrieveDataWithToken = async () => {
      checkIfUserExists(token).then((exists) => {
        if (exists && !storedToken) {
          SecureStorage.setItemAsync(TOKEN_KEY, token)
            .then(() => {
              setUserToken(token);
              setStoredToken(true);
              ToastAndroid.show("¡ Usuario creado !", ToastAndroid.BOTTOM);
              navigate("Home");
            })
            .catch((error) => console.log(error));

          ToastAndroid.show(
            "¡ Bienvenido a SpaceTraders !",
            ToastAndroid.BOTTOM
          );
          navigate("Home");
        } else {
          ToastAndroid.show(
            "El token no corresponde a un usuario válido",
            ToastAndroid.BOTTOM
          );
        }
      });
    };

    userToken?.trim() !== "" || userToken !== null && retrieveDataWithToken();
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.backgroundColor} />
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* CREATING A STACK NAVIGATOR WITH A DRAWER NAVIGATOR INSIDE */}
        {/* SOURCE: https://reactnavigation.org/docs/hiding-tabbar-in-screens */}
        <Stack.Screen name="MainScreen">
          {() => <MainScreen storedToken={storedToken} />}
        </Stack.Screen>
        <Stack.Screen name="LogIn">
          {() => <LogIn onLogin={handlelogin} />}
        </Stack.Screen>
        <Stack.Screen name="SignIn">
          {() => <SignIn onSignIn={handleSignIn} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {() => (
            <Home
              userToken={userToken}
              setUserToken={setUserToken}
              storedToken={storedToken}
              setStoredToken={setStoredToken}
            />
          )}
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

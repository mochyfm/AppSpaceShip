import { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import { Palette } from "../../Themes/main.themes";
import ListOfLoans from "./ListOfLoans";
import ListOfShips from "./ListOfShips/ListOfShips";
import { useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { TOKEN_KEY, navigate } from "../../services/main.service";

import * as SecureStorage from "expo-secure-store";

export function Home({
  userToken,
  setUserToken,
  storedToken,
  setStoredToken,
}: {
  userToken?: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  storedToken : boolean,
  setStoredToken: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const Drawer = createDrawerNavigator();

  const [profileToken, setProfileToken] = useState("");

  const logOut = () => {

    const deleteSavedToken = async () => {
      await SecureStorage.deleteItemAsync(TOKEN_KEY).then(() => {
        setProfileToken("");
        setUserToken("");
        setStoredToken(false);
        navigate("MainScreen");
      });
    };

    deleteSavedToken();
  };

  useEffect(() => {
    const assingToken = (userToken: string) => {
      setProfileToken(userToken);
      setUserToken("");
    };

    userToken && assingToken(userToken);
  }, [userToken]);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Palette.headerBackgroundColor,
          borderBottomWidth: 2,
          borderColor: Palette.fontColor,
        },
        headerTitleStyle: {
          color: Palette.headerFontColor,
        },
        headerTintColor: Palette.drawerFontColor,
        drawerContentStyle: {
          backgroundColor: Palette.drawerBackgroundColor,
        },
        drawerActiveTintColor: Palette.fontColor,
        drawerInactiveTintColor: Palette.fontColor,
        headerRight: (props) => (
          <Pressable onPress={logOut}>
            <View style={styles.logOutButtonBody}>
              <Text style={styles.logOutButtonText}>Log Out</Text>
            </View>
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen name="Profile">
        {() => <Profile token={profileToken} setToken={setProfileToken} storedToken={storedToken} />}
      </Drawer.Screen>
      <Drawer.Screen name="Loans">
        {() => <ListOfLoans token={profileToken} />}
      </Drawer.Screen>
      <Drawer.Screen name="Ships">
        {() => <ListOfShips token={profileToken} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logOutButtonBody: {
    backgroundColor: Palette.logOutButtonBackgroundColor,
    borderColor: Palette.logOutButtonBorderColor,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    padding: 7,
  },
  logOutButtonText: {
    color: Palette.logOutButtonTextColor,
    fontWeight: "bold",
  },
});

export default Home;

import { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import { Palette } from "../../Themes/main.themes";
import ListOfLoans from "./ListOfLoans";
import ListOfShips from "./ListOfShips/ListOfShips";
import { useState } from "react";
import { Button, Pressable } from "react-native";
import { navigate } from "../../services/main.service";

export function Home({
  userToken,
  setUserToken,
}: {
  userToken?: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const Drawer = createDrawerNavigator();

  const [profileToken, setProfileToken] = useState("");

  const logOut = () => {
    setProfileToken("");
    setUserToken("");
    navigate("MainScreen")
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
        headerRight: (props) => <Button title="logOut" onPress={logOut} />,
      }}
    >
      <Drawer.Screen name="Profile">
        {() => <Profile token={profileToken} />}
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

export default Home;

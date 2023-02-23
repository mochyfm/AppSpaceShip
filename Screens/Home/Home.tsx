import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { PilotLoginData, PilotProfileData } from "../../Types/Types";
import { getUserData } from "../../services/main.service";
import { Palette } from "../../Themes/main.themes";

export function Home({ userToken }: { userToken?: string }) {
  const Drawer = createDrawerNavigator();
  const [userData, setUserData] = useState<PilotProfileData>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const fetchForUserData = async (token: string) => {
      const data = await getUserData(token);
      data && setUserData(data.user);
      setLoading(false);
    };

    userToken && fetchForUserData(userToken);
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
      }}
    >
      <Drawer.Screen name="Profile">
        {() => <Profile isLoading={isLoading} userData={userData} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default Home;

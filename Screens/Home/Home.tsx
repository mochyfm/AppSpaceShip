import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import { Palette } from "../../Themes/main.themes";
import ListOfLoans from "./ListOfLoans";
import ListOfShips from "./ListOfShips/ListOfShips";

export function Home({
  userToken,
  setUserToken,
}: {
  userToken?: string;
  setUserToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const Drawer = createDrawerNavigator();

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
      }}
    >
      <Drawer.Screen name="Profile">
        {() => <Profile token={userToken} />}
      </Drawer.Screen>
      <Drawer.Screen name="Loans">
        {() => <ListOfLoans token={userToken} />}
      </Drawer.Screen>
      <Drawer.Screen name="Ships">
        {() => <ListOfShips token={userToken} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default Home;

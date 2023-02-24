import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { PilotProfileData } from "../../../Types/Types";
import Loading from "../../../Components/Loading";
import { Palette } from "../../../Themes/main.themes";
import { LinearGradient } from "expo-linear-gradient";
import { TOKEN_KEY, getUserData } from "../../../services/main.service";
import GradientBackground from "../../../Components/GradientBackground";
import * as SecureStorage from "expo-secure-store";

export function Profile({
  token,
  setToken,
  storedToken,
}: {
  token?: string | null;
  setToken: Function;
  storedToken: boolean;
}) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<PilotProfileData>();

  /**
   * He estado buscando, y según parece existe un componente llamado
   * "useFocusEffect", originario de la propia libreria de @react-navigation.
   *
   * Mi problema es que he intentado utilizar este componente, y al intentar probarlo
   * no comenté la opción del getUserData() -> (La petición asíncrona a la api).
   * Y agoté el número de peticiones diarias - Esto a dia 24/02/2023 a las 20:34 siendo la entrega
   * el día 25 a las 14:15.
   *
   * Aun así, he conseguido que me dejase pedir, pero no he conseguido hacer que con el useFocusEffect
   * pueda recargar los datos desde el token cuando se hace "focus" a este componente. La documentación
   * que he seguido es la siguiente: https://reactnavigation.org/docs/use-focus-effect/
   *
   * PD: La api responde muy lento, refiriendome a que tarda sus 8 - 10 segundos en darme el perfil desde
   * el login o el sign.
   *
   */

  useEffect(() => {
    setLoading(true);

    const fetchForUserData = async (token: string) => {
      const data = await getUserData(token);
      data && setUserData(data.user);
      setLoading(false);
    };

    const getTokenFromStorage = async () => {
      try {
        const token = await SecureStorage.getItemAsync(TOKEN_KEY);
        setToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    storedToken ? getTokenFromStorage().then(() => {
      token && fetchForUserData(token);
    }) : token && fetchForUserData(token);
  }, [token]);

  return (
    <Loading isLoading={isLoading}>
      <GradientBackground>
        <View style={styles.profileBlock}>
          <View style={styles.profileHeader}>
            <Image
              source={require("./assets/logo.jpg")}
              style={styles.profilePic}
            />
            <Text style={styles.profileUsername}>{userData?.username}</Text>
          </View>
        </View>
        <View style={styles.profileBody}>
          <View style={styles.profileStatsBody}>
            <View style={styles.profileInfoBlock}>
              <Text style={styles.profileBodyText}>{userData?.credits} </Text>
              <Image
                style={[
                  styles.profileBodyImage,
                  styles.profileCoinImageAdjustment,
                ]}
                source={require("./assets/galacticCredit.gif")}
              />
            </View>
            <View style={styles.profileInfoBlock}>
              <Text style={styles.profileBodyText}>{userData?.shipCount}</Text>
              <Image
                style={styles.profileBodyImage}
                source={require("./assets/spaceShip.gif")}
              />
            </View>
            <View style={styles.profileInfoBlock}>
              <Text style={styles.profileBodyText}>
                {userData?.structureCount}
              </Text>
              <Image
                style={styles.profileBodyImage}
                source={require("./assets/spaceStation.png")}
              />
            </View>
          </View>
        </View>
      </GradientBackground>
    </Loading>
  );
}

const styles = StyleSheet.create({
  profileBlock: {
    backgroundColor: Palette.drawerBackgroundColor,
    borderBottomColor: Palette.drawerFontColor,
    borderBottomWidth: 1,
    height: "30%",
    display: "flex",
    position: "relative",
    padding: 50,
    width: "100%",
  },
  backgroundImage: {
    alignItems: "center",
    height: "30%",
  },
  profileHeader: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  profilePic: {
    borderRadius: 100,
    height: 95,
    margin: 10,
    marginBottom: 40,
    width: 100,
  },
  profileUsername: {
    color: Palette.fontColor,
    fontSize: 28,
    fontWeight: "bold",
  },
  profileJoinedAt: {
    color: Palette.fontColor,
    fontSize: 13,
    marginTop: 15,
  },
  profileBody: {
    justifyContent: "center",
    display: "flex",
    height: "70%",
    padding: 20,
    width: "100%",
  },
  profileStatsBody: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  profileInfoBlock: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    width: "100%",
  },
  profileBodyText: {
    color: Palette.profileBodyColor,
    fontSize: 30,
  },
  profileBodyImage: {
    height: 80,
    width: 120,
    margin: 10,
  },
  profileCoinImageAdjustment: {
    height: 80,
    width: 80,
  },
});

export default Profile;

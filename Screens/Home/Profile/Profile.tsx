import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { PilotProfileData } from "../../../Types/Types";
import Loading from "../../../Components/Loading";
import { Palette } from "../../../Themes/main.themes";
import { LinearGradient } from "expo-linear-gradient";

export function Profile({
  userData,
  isLoading,
}: {
  isLoading: boolean;
  userData?: PilotProfileData;
}) {
  const [showLoans, setShowLoans] = useState<boolean>();
  const renderDate = (date?: string): string | null => {
    return date ? date.substring(0, 10) : null;
  };

  console.log(userData);

  return (
    <Loading isLoading={isLoading}>
      <LinearGradient
        colors={[
          Palette.degradedColorDarker,
          Palette.degradedColorLigther,
          Palette.degradedColorDarker,
        ]}
        start={{ x: 0, y: 2 }}
        end={{ x: 10, y: 2 }}
        style={styles.profileContainer}
      >
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
                source={require("./assets/galacticCreditv2.gif")}
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
      </LinearGradient>
    </Loading>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "#000",
    display: "flex",
    height: "100%",
  },
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

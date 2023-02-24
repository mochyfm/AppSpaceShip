import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Ship, ShipType } from "../Types/Types";
import { Palette } from "../Themes/main.themes";

const ShipCard = ({ shipData }: { shipData: Ship }) => {
  const {
    manufacturer,
    maxCargo,
    plating,
    weapons,
    purchaseLocation,
    speed,
    type,
    shipClass,
  } = shipData;

  function renderImage(type: ShipType): ImageSourcePropType {
    /**
     * Las naves están, más o menos adaptadas a su tamaño, es decir,
     * he escogido un icono por tamaño de la nave (manualmente claro).
     * 
     * He decidido hacer esto así en lugar de lo de guardar la foto de perfil.
     */
    switch (type) {
      case "JW-MK-I":
        return require("./assets/SpaceShips/JW-MK-I.png");
      case "JW-MK-II":
        return require("./assets/SpaceShips/JW-MK-II.png");
      case "ZA-MK-II":
        return require("./assets/SpaceShips/ZA-MK-II.png");
      case "ZA-MK-III":
        return require("./assets/SpaceShips/ZA-MK-III.png");
      case "EM-MK-I":
        return require("./assets/SpaceShips/EM-MK-I.png");
      case "HM-MK-I":
        return require("./assets/SpaceShips/HM-MK-I.png");
      case "HM-MK-III":
        return require("./assets/SpaceShips/HM-MK-III.png");
      case "TD-MK-I":
        return require("./assets/SpaceShips/TD-MK-I.png");
      case "GR-MK-I":
        return require("./assets/SpaceShips/GR-MK-I.png");
      case "GR-MK-II":
        return require("./assets/SpaceShips/GR-MK-II.png");
      case "GR-MK-III":
        return require("./assets/SpaceShips/GR-MK-III.png");
      default:
        return require("./assets/SpaceShips/defaultShip.png");
    }
  }

  return (
    <View style={styles.shipCardContainer}>
      <View style={styles.shipCardBody}>
        <Image style={styles.shipIconImage} source={renderImage(type)} />
        <View>
          <View style={styles.shipCardTextContainer}>
            <Text style={styles.shipCardTextTag}>Ship Manufacturer:</Text>
            <Text style={styles.shipCardTextValue}>{manufacturer}</Text>
          </View>
          <View style={styles.shipCardTextContainer}>
            <Text style={styles.shipCardTextTag}>Maximum Cargo:</Text>
            <Text style={styles.shipCardTextValue}>{maxCargo}</Text>
          </View>
          <View style={styles.shipCardTextContainer}>
            <Text style={styles.shipCardTextTag}>Weapons:</Text>
            <Text style={styles.shipCardTextValue}>{weapons}</Text>
          </View>
          <View style={styles.shipCardTextContainer}>
            <Text style={styles.shipCardTextTag}>Type:</Text>
            <Text style={styles.shipCardTextValue}>{type}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shipCardContainer: {
    alignSelf: "center",
    backgroundColor: Palette.shipCardBackgroundColor,
    borderColor: Palette.shipCardBorderColor,
    borderRadius: 15,
    borderWidth: 1,
    display: "flex",
    flex: 1,
    marginTop: 40,
    width: "90%",
  },
  shipIconImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 40,
    height: 60,
    width: 60,
  },
  shipCardBody: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    padding: 25,
    paddingLeft: 30,
    width: "100%",
  },
  shipCardColumn: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  shipCardTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  shipCardTextTag: {
    color: Palette.shipCardInfoTagColor,
    fontSize: 15,
    marginRight: 5,
  },
  shipCardTextValue: {
    fontSize: 15,
    color: Palette.shipCardValueColor,
  },
});

export default ShipCard;

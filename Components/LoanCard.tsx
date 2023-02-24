import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AvailableLoan } from "../Types/Types";
import { Palette } from "../Themes/main.themes";

const LoanCard = ({
  loanData,
  onPressAction,
}: {
  loanData: AvailableLoan;
  onPressAction: Function;
}) => {
  const { amount, collateralRequired, rate, termInDays, type } = loanData;

  const renderType = (type: string): string => {
    return `${type.substring(0, 1)}${type
      .substring(1, type.length)
      .toLowerCase()}`;
  };

  return (
    <View style={styles.loanCardContainer}>
      <View style={styles.loanCardBody}>
        <View style={styles.loanCardTextContainer}>
          <Text style={styles.loanCardTextTag}>Amount:</Text>
          <Text style={styles.loanCardTextValue}>{amount}</Text>
          <Image
            style={styles.loanTextIconImage}
            source={require("./assets/galacticCredit.gif")}
          />
        </View>
        <View style={styles.loanCardTextContainer}>
          <Text style={styles.loanCardTextTag}>Colateral Required:</Text>
          <Text style={styles.loanCardTextValue}>
            {collateralRequired ? "Yes" : "No"}
          </Text>
        </View>
        <View style={styles.loanCardTextContainer}>
          <Text style={styles.loanCardTextTag}>Term:</Text>
          <Text style={styles.loanCardTextValue}>{termInDays} days</Text>
        </View>
        <View style={styles.loanCardTextContainer}>
          <Text style={styles.loanCardTextTag}>Rate:</Text>
          <Text style={styles.loanCardTextValue}>{rate}%</Text>
        </View>
        <View style={styles.loanCardTextContainer}>
          <Text style={styles.loanCardTextTag}>Type:</Text>
          <Text style={styles.loanCardTextValue}>{renderType(type)}</Text>
        </View>
        <Pressable
          onPress={() => onPressAction(type)}
          style={styles.loanAssignButton}
        >
          <Text style={styles.loanAssignButtonText}>Adquire Loan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoanCard;

const styles = StyleSheet.create({
  loanCardContainer: {
    alignSelf: "center",
    backgroundColor: Palette.loanCardBackgroundColor,
    borderColor: Palette.loanCardBorderColor,
    borderRadius: 15,
    borderWidth: 1,
    display: "flex",
    flex: 1,
    marginTop: 40,
    width: "80%",
  },
  loanCardBody: {
    justifyContent: "center",
    display: "flex",
    padding: 25,
    paddingLeft: 30,
    width: "100%",
  },
  loanCardTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  loanCardTextTag: {
    color: Palette.loanCardInfoTagColor,
    fontSize: 20,
    marginRight: 5,
  },
  loanTextIconImage: {
    height: 25,
    marginLeft: 5,
    width: 25,
  },
  loanCardTextValue: {
    fontSize: 20,
    color: Palette.loanCardValueColor,
  },
  loanAssignButton: {
    alignItems: "center",
    backgroundColor: Palette.loanButtonBackgroundColor,
    borderColor: Palette.loanButtonBorderColor,
    borderRadius: 10,
    display: "flex",
    margin: 10,
    padding: 10,
  },
  loanAssignButtonText: {
    color: Palette.loanButtonColor,
    fontSize: 18,
    fontWeight: "bold",
  },
});

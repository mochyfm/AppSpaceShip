import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Loading from "../../../Components/Loading";
import GradientBackground from "../../../Components/GradientBackground";
import { Ship } from "../../../Types/Types";

const ListOfShips = ({ token }: { token?: string }) => {

    const [ships, setShips] = useState<Ship[]>();
    const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <Loading isLoading={isLoading}>
      <GradientBackground>
        <View>
          <Text>ListOfShips</Text>
        </View>
      </GradientBackground>
    </Loading>
  );
};

export default ListOfShips;

const styles = StyleSheet.create({});

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../../../Components/Loading";
import GradientBackground from "../../../Components/GradientBackground";
import { Ship } from "../../../Types/Types";
import ShipCard from "../../../Components/ShipCard";
import { getShips } from "../../../services/main.service";

const ListOfShips = ({ token }: { token?: string | null }) => {
  const [ships, setShips] = useState<Ship[]>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);


    const fetchForUserData = async (token: string) => {
      const data = await getShips(token);

      data && setShips(data);
      setLoading(false);
    };

    token && fetchForUserData(token);
  }, [token]);

  return (
    <Loading isLoading={isLoading}>
      <GradientBackground>
        {ships && (
          <FlatList
            data={ships}
            renderItem={({ item }) => <ShipCard shipData={item} />}
            keyExtractor={(item, index) => `${item.shipClass}${item.manufacturer}${index.toString()}`}
          />
        )}
      </GradientBackground>
    </Loading>
  );
};

export default ListOfShips;

const styles = StyleSheet.create({});

import { View, StyleSheet, FlatList, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../../../Components/Loading";
import {
  getAvailableLoans,
  navigate,
  requestLoanByType,
} from "../../../services/main.service";
import LoanCard from "../../../Components/LoanCard";
import { AvailableLoan } from "../../../Types/Types";
import GradientBackground from "../../../Components/GradientBackground";

const ListOfLoans = ({ token }: { token?: string | null }) => {

  const [isLoading, setLoading] = useState<boolean>(true);
  const [loans, setLoans] = useState<AvailableLoan[]>();

  function retrieveLoanType(type: string) {
    const requestLoan = async (
      userToken: string,
      typeOfLoan: string
    ): Promise<void> => {
      requestLoanByType(userToken, typeOfLoan).then((condition) => {
        if (!condition) {
          ToastAndroid.show("Este préstamo ya ha sido adquirido", ToastAndroid.BOTTOM);
        } else {
          ToastAndroid.show("Préstamo adquirido correctamente", ToastAndroid.BOTTOM);
          navigate('Profile')
        }
      });
    };

    type && token && requestLoan(token, type);
  }

  useEffect(() => {
    setLoading(true);

    const fetchForUserData = async (token: string) => {
      const data = await getAvailableLoans(token);
      data && setLoans(data);
      setLoading(false);
    };

    token && fetchForUserData(token);
  }, [token]);

  return (
    <Loading isLoading={isLoading}>
      <GradientBackground>
        <View>
          {loans && (
            <FlatList
              data={loans}
              renderItem={({ item }) => (
                <LoanCard loanData={item} onPressAction={retrieveLoanType} />
              )}
              keyExtractor={(index) => index.toString()}
            />
          )}
        </View>
      </GradientBackground>
    </Loading>
  );
};

const styles = StyleSheet.create({});

export default ListOfLoans;

import { createNavigationContainerRef } from "@react-navigation/native";
import axios from "axios";
import { AvailableLoan, PilotLoginData, PilotSignData, Ship } from "../Types/Types";

const API_MAIN_URL = "https://api.spacetraders.io";
export const TOKEN_KEY = "userToken";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string) {
  if (navigationRef.isReady()) {
    name && navigationRef.navigate(name as never);
  }
}

export async function claimUser(
  username: string
): Promise<PilotSignData | null> {
  return await axios
    .post(`${API_MAIN_URL}/users/${username}/claim`)
    .then((response) => {
      if (response.data.error_message) return null;
      else {
        console.log("Tu usuario es: ", response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

/* Tokens en drive */
export async function getUserData(token: string): Promise<PilotLoginData> {
  return await axios
    .get(`${API_MAIN_URL}/my/account/?token=${token}`)
    .then((response) => {
      if (response.data.error_message) console.log(response.data.error_message);
      else return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function checkIfUserExists(token: string): Promise<boolean> {
  return await axios
    .get(`${API_MAIN_URL}/my/account/?token=${token}`)
    .then((response) => {
      return response.data !== null;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}

export async function getAvailableLoans(
  token: string
): Promise<AvailableLoan[]> {
  return await axios
    .get(`${API_MAIN_URL}/types/loans?token=${token}`)
    .then((response) => {
      if (response.data.error_message) console.log(response.data.error_message);
      else return response.data.loans;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getShips(
  token: string
): Promise<Ship[]> {
  return await axios.get(`${API_MAIN_URL}/systems/OE/ship-listings?token=${token}`)
  .then((response) => {
    if (response.data.error_message) return null;
    else return response.data.shipListings;
  }).catch((error) => {
    return null
  });
}

export async function requestLoanByType(
  token: string,
  type: string
): Promise<boolean> {
  return await axios
    .post(`${API_MAIN_URL}/my/loans?token=${token}&type=${type}`)
    .then(() =>  true)
    .catch(() => false);
}

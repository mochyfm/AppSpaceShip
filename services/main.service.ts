 import { createNavigationContainerRef } from '@react-navigation/native';
import axios from 'axios';
import { PilotData, PilotErrorObject } from '../Types/Types';

const API_MAIN_URL = 'https://api.spacetraders.io';

export const navigationRef = createNavigationContainerRef();

export function navigate(name : string) {
  if (navigationRef.isReady()) {
    name && navigationRef.navigate(name as never);
  }
}

export async function claimUser(username: string) : Promise<PilotData | null> {
  return await axios.post(`${API_MAIN_URL}/users/${username}/claim`)
  .then((response) => {
    if (response.data.error_message) return null;
    else  {
      console.log('Tu usuario es: ', response.data);
      return response.data;
    }
  })
  .catch((error) => {
    console.log(error);
    return null
  });;
}

/* Tokens en drive */
export async function getUserData(token: string) {
  return await axios.get(`${API_MAIN_URL}/my/account/?token=${token}`)
  .then((response) => {
    if (response.data.error_message) console.log(response.data.error_message);
    else return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}


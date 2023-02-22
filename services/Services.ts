import { createNavigationContainerRef } from '@react-navigation/native';
import axios from 'axios';

export const navigationRef = createNavigationContainerRef();

export function navigate(name : string) {
  if (navigationRef.isReady()) {
    name && navigationRef.navigate(name as never);
  }
}

/* Tokens en drive */
export async function getUserData(token: string) {
  return await fetch(`api.spacetraders.io/my/account/?token=${token}`);
}



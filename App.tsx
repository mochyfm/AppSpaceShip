import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useState} from 'react';
import MainScreen from './Screens/MainScreen';
import LogIn from './Screens/LogIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import * as SecureStorage from 'expo-secure-store';
import { navigationRef } from './services/Services';
import { PilotData } from './Types/Types';

const TOKEN_KEY = 'pilotToken';



export default function App() {

  const Stack = createNativeStackNavigator();
  const [pilotData, setPilotData] = useState<PilotData>();

  const handlelogin = () => {
    
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.backgroundColor} />
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* CREATING A STACK NAVIGATOR WITH A DRAWER NAVIGATOR INSIDE */}
        {/* SOURCE: https://reactnavigation.org/docs/hiding-tabbar-in-screens */}
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LogIn">
          {() => <LogIn onLogin={handlelogin}/>}
        </Stack.Screen>
        <Stack.Screen name="SignIn">
          {() => <SignIn />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {() => <Home pilotData={pilotData}/>}  
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#000',
  },
});

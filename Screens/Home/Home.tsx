import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import { PilotData } from '../../Types/Types';


export function Home({ pilotData } : { pilotData ?: PilotData}) {

  const Drawer = createDrawerNavigator();


  return (
      <Drawer.Navigator>
        <Drawer.Screen name='Profile'>
            {() => <Profile userData={pilotData} />}
        </Drawer.Screen>
      </Drawer.Navigator>
  );
}

export default Home;

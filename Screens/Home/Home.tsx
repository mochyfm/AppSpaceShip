import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import { PilotProfile } from '../../Types/Types';


export function Home({ profile } : { profile ?: PilotProfile}) {

  const Drawer = createDrawerNavigator();


  return (
      <Drawer.Navigator>
        <Drawer.Screen name='Profile'>
            {() => <Profile userData={profile} />}
        </Drawer.Screen>
      </Drawer.Navigator>
  );
}

export default Home;

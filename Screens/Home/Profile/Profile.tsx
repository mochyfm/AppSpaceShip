import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PilotData } from '../../../Types/Types';
import { navigate } from '../../../services/Services';

export function Profile({ userData } : { userData ?: PilotData } ) {

  return (
    <View>
      <View style={styles.profileBlock}>
        <View style={styles.profileHeader}>
          <Image
            source={require('./assets/logo.jpg')}
            style={styles.profilePic}
          />
          <Text style={styles.profileUsername}>Username</Text>
        </View>
        <View style={styles.profileBody}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileBlock: {
    backgroundColor: '#C2C2C2',
    display: 'flex',
    margin: 20,
    padding: 15,
  },
  profileHeader: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  profilePic: {
    borderRadius: 100,
    height: 95,
    margin: 10,
    width: 100,
  },
  profileUsername: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  profileBody: {
    display: 'flex'
  }
});

export default Profile;

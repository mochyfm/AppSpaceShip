import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import { navigate } from '../../services/Services'

export default function MainScreen({ navigation }: any) {

  return (
    <>
      <Image
        style={styles.backgroundImage}
        source={require('./assets/backgroundVid.gif')}
        />
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imageStyle}
            source={require('./assets/spaceTraders.png')}
          />
        </View>
        <View style={styles.mainScreenMessage}>
          <Text style={[styles.mainScreenText, styles.subTitle]}>
            Welcome to the Universe
          </Text>
          <Text style={[styles.mainScreenText, styles.mainTitle]}>
            Welcome to <Text style={styles.mainTitleGame}>Space Traders</Text>
          </Text>
        </View>
        <View style={styles.groupBlock}>
          <View>
            <Pressable
              style={styles.logInButton}
              onPress={() => navigate('LogIn')}
            >
              <View>
                <Text style={styles.logInButtonText}>Log In</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.signInBlock}>
            <View>
              <Text style={styles.signInText}>You dont have an account?</Text>
            </View>
            <Pressable style={styles.signInLink} onPress={() => navigation.navigate('SignIn')}>
              <View>
                <Text style={styles.signInTextLink}>Sign In</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: '100%',
  },
  imageStyle: {
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  mainScreenMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  mainScreenText: {
    color: '#FFF',
  },
  mainTitle: {
    fontSize: 25,
  },
  subTitle: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 16,
  },
  mainTitleGame: {
    fontStyle: 'italic',
  },
  groupBlock: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  logInButton: {
    backgroundColor: '#DE8E2B',
    borderRadius: 15,
    padding: 50,
    paddingBottom: 10,
    paddingTop: 10,
  },
  logInButtonText: {
    color: '#FFF',
    fontSize: 20,
  },
  signInBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  signInText: {
    color: '#FFF',
    marginRight: 5,
  },
  signInLink: {},
  signInTextLink: {
    color: '#FFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

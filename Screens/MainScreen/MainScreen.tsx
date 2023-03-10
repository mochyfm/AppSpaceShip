import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import { navigate } from '../../services/main.service'
import { Palette } from '../../Themes/main.themes';

export default function MainScreen({ storedToken } : { storedToken : boolean }) {

  const handleNavigate = (name : string) => {
    if (storedToken) {
      navigate('Home')
    } else navigate(name)
  }

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
              onPress={() => handleNavigate('LogIn')}
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
            <Pressable style={styles.signInLink} onPress={() => navigate('SignIn')}>
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
    backgroundColor: Palette.backgroundDefaultColor,
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
    color: Palette.fontColor,
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
    backgroundColor: Palette.primaryColor,
    borderRadius: 15,
    padding: 50,
    paddingBottom: 10,
    paddingTop: 10,
  },
  logInButtonText: {
    color: Palette.fontColor,
    fontSize: 20,
  },
  signInBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  signInText: {
    color: Palette.fontColor,
    marginRight: 5,
  },
  signInLink: {},
  signInTextLink: {
    color: Palette.fontColor,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

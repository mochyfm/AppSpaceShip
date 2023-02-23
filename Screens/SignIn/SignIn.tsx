import { Image, Pressable, TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Palette } from '../../Themes/main.themes';

export function SignIn({ onSignIn } : { onSignIn : Function }) {
  
  const [userName, setUserName] = useState<string>('');

  const handleInput = (text: string) => {
    setUserName(text);
  };

  const handleSubmit = () => {
    if (userName.trim() !== '') {
      onSignIn(userName)
      setUserName('')
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.signInSection}>
          <Image
            style={styles.signInLogo}
            source={require('./assets/theEmpireNeedsYou.jpg')}
          />
          <View>
            <Text style={styles.infoMessage}>Choose a username</Text>
          </View>
          <TextInput
            style={styles.userInput}
            placeholder="Username"
            onChangeText={handleInput}
            value={userName}
          />
          <Pressable
            style={styles.signButton}
            onPress={handleSubmit}
          >
            <Text style={styles.signButtonText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Palette.signInBackgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  signInLogo: {
    height: 250,
    width: 190,
  },
  signInSection: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '70%',
    width: '100%',
  },
  infoMessage: {
    color: Palette.signInInfoMessage,
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
  },
  userInput: {
    alignSelf: 'center',
    backgroundColor: Palette.signInBackgroundColor,
    borderRadius: 15,
    borderColor: Palette.inputBorderColor,
    borderWidth: 1,
    display: 'flex',
    padding: 15,
    textAlign: 'center',
    width: '70%',
  },
  signButton: {
    alignItems: 'center',
    backgroundColor: Palette.signInButtonBackgroundColor,
    borderRadius: 15,
    display: 'flex',
    marginTop: 50,
    padding: 15,
    width: '70%',
  },
  signButtonText: {
    color: Palette.signInButtonFontColor,
  },
});

export default SignIn;

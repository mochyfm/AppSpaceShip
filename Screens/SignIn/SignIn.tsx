import { Image, Pressable, TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { navigate } from '../../services/Services';

export function SignIn({ onSignIn } : { onSignIn ?: Function }) {
  const [userName, setUserName] = useState<string>();

  const handleInput = (text: string) => {
    setUserName(text);
  };

  const handleSubmit = () => {
    setUserName('');
    // navigation.navigate('Home')
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
            onPress={() => navigate('Home')}
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
    backgroundColor: '#FFF',
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
    color: '#000',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
  },
  userInput: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    display: 'flex',
    padding: 15,
    width: '70%',
  },
  signButton: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 15,
    display: 'flex',
    marginTop: 50,
    padding: 15,
    width: '70%',
  },
  signButtonText: {
    color: '#FFF',
  },
});

export default SignIn;

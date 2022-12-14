import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import StartGameScreen from './src/screens/StartGameScreen/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screens/GameScreen/GameScreen';
import Colors from './src/constants/Colors';
import GameOverScreen from './src/screens/GameOverScreen/GameOverScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userNumber, setUserNumber] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [rounds, setRounds] = useState(0);

  function pickedNumberHandler(pickedNumber: any) {
    setUserNumber(parseInt(pickedNumber, 10));
  }

  function handleWin() {
    setHasWon(true);
  }

  function handleReset() {
    setHasWon(false);
    setUserNumber(0);
    setRounds(0);
  }

  let screen = <StartGameScreen onPickFunction={pickedNumberHandler} />;

  if (userNumber > 0 && !hasWon) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        handleWin={handleWin}
        rounds={rounds}
        setRounds={setRounds}
      />
    );
  }
  if (hasWon) {
    screen = <GameOverScreen handleResetFn={handleReset} rounds={rounds} />;
  }

  const linearGradientColors = isDarkMode
    ? ['black', Colors.primary500]
    : ['white', Colors.primary500];

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={linearGradientColors[0]}
      />
      <LinearGradient
        colors={linearGradientColors}
        style={styles.backgroundGradient}>
        <ImageBackground
          source={require('./src/assets/images/bg.png')}
          resizeMode={'cover'}
          style={styles.backgroundGradient}
          imageStyle={styles.backgroundStyle}>
          <SafeAreaView style={styles.backgroundGradient}>
            {/*The next two components are used to make sure the content is
            displayed correctly on all devices. The KeyboardAvoidingView
            component is used to make sure the content is displayed correctly
            when the keyboard is open. The ScrollView component is used to make
            sure the content is displayed correctly when the device is rotated.*/}

            {/*<ScrollView>
              <KeyboardAvoidingView
                style={styles.backgroundGradient}
                behavior={'position'}>*/}
            {screen}
            {/*</KeyboardAvoidingView>
            </ScrollView>*/}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    opacity: 0.15,
  },
  backgroundGradient: {
    flex: 1,
  },
});

export default App;

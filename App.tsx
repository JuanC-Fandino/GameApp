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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userNumber, setUserNumber] = useState(0);

  function pickedNumberHandler(pickedNumber: string) {
    setUserNumber(parseInt(pickedNumber));
  }

  let screen = <StartGameScreen onPickFunction={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  const linearGradientColors = isDarkMode
    ? ['black', 'orange']
    : ['white', 'orange'];

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={linearGradientColors[0]}
      />
      <LinearGradient
        colors={linearGradientColors}
        style={styles.backgroundGradient}>
        <SafeAreaView style={styles.backgroundGradient}>
          <ImageBackground
            source={require('./src/assets/images/bg.png')}
            resizeMode={'cover'}
            style={styles.backgroundGradient}
            imageStyle={styles.backgroundStyle}>
            {screen}
          </ImageBackground>
        </SafeAreaView>
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

import React from 'react';
import { Text, View } from 'react-native';
import { GameScreenStyle } from './GameScreen.style';
import Title from '../../components/Title/Title';

function GameScreen() {
  return (
    <View style={GameScreenStyle.mainContainer}>
      <Title>Intentos del dispositivo</Title>
      <View>
        <Text>¿Mayor o menor?</Text>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

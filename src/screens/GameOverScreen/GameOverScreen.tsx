import React from 'react';
import { View } from 'react-native';
import Title from '../../components/Title/Title';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { GameOverScreenStyle } from './GameOverScreen.style';

interface GameOverScreenProps {
  handleResetFn: () => void;
}

function GameOverScreen(props: GameOverScreenProps) {
  const { handleResetFn } = props;
  return (
    <View style={GameOverScreenStyle.container}>
      <Title style={GameOverScreenStyle.title}>Ganaste!</Title>
      <PrimaryButton onPress={handleResetFn}> Reiniciar</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

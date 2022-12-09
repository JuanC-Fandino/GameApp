import React from 'react';
import { Image, Text, View } from 'react-native';
import Title from '../../components/Title/Title';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { GameOverScreenStyle } from './GameOverScreen.style';
import Card from '../../components/Card/Card';

interface GameOverScreenProps {
  handleResetFn: () => void;
  rounds: number;
}

function GameOverScreen(props: GameOverScreenProps) {
  const { handleResetFn, rounds } = props;
  return (
    <View style={GameOverScreenStyle.container}>
      <Title style={GameOverScreenStyle.title}>Game Over!</Title>
      <View style={GameOverScreenStyle.imageContainer}>
        <Image
          style={GameOverScreenStyle.image}
          source={require('../../assets/images/victoria.jpg')}
        />
      </View>
      <Card style={GameOverScreenStyle.summaryContainer}>
        <Text style={GameOverScreenStyle.summary}>
          Tu dispositivo necesito de{' '}
          <Text style={GameOverScreenStyle.highlight}> {rounds} </Text> intentos
          para adivinar el número secreto.
        </Text>
      </Card>
      <PrimaryButton onPress={handleResetFn}> Reiniciar</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

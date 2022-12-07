import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { GameScreenStyle } from './GameScreen.style';
import Title from '../../components/Title/Title';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

// @ts-ignore
function GameScreen(this: any, { userNumber }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [hasChanged, setHasChanged] = useState(false);

  const [deviceNumber, setDeviceNumber] = useState(0);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && deviceNumber < userNumber) ||
      (direction === 'greater' && deviceNumber > userNumber)
    ) {
      Alert.alert('No mientas!', 'Sabes que eso es incorrecto...', [
        { text: 'Perdón', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      setMax(deviceNumber + 1);
      setHasChanged(true);
    } else {
      setMin(deviceNumber);
      setHasChanged(true);
    }
  }

  useEffect(() => {
    if (hasChanged) {
      setDeviceNumber(generateRandomBetween(min, max, deviceNumber));
      setHasChanged(false);
    }
  }, [min, max, hasChanged, deviceNumber]);

  useEffect(() => {
    if (deviceNumber === userNumber) {
      Alert.alert('Ganaste!', 'Has adivinado el número', [
        { text: 'Reiniciar', onPress: () => {} },
      ]);
    }
  }, [deviceNumber, userNumber]);

  return (
    <View style={GameScreenStyle.mainContainer}>
      <Title>Número predicho</Title>
      <NumberContainer>{deviceNumber}</NumberContainer>
      <View>
        <Text>¿Mayor o menor?</Text>
        <View style={GameScreenStyle.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View />
    </View>
  );
}

export default GameScreen;

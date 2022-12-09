import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { GameScreenStyle } from './GameScreen.style';
// @ts-ignore
import Title from '../../components/Title/Title';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import Card from '../../components/Card/Card';

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

interface GameScreenProps {
  userNumber: number;
  handleWin: () => void;
  setRounds: (rounds: number) => void;
  rounds: number;
}

// @ts-ignore
function GameScreen(this: any, props: GameScreenProps) {
  const { userNumber, handleWin, setRounds, rounds } = props;
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [hasChanged, setHasChanged] = useState(false);
  const [guessesList, setGuessesList] = useState<Array<number>>([]);

  const [deviceNumber, setDeviceNumber] = useState(
    generateRandomBetween(1, 100, userNumber),
  );

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
      setMax(deviceNumber);
      setHasChanged(true);
    } else {
      setMin(deviceNumber + 1);
      setHasChanged(true);
    }
  }

  useEffect(() => {
    if (hasChanged) {
      setDeviceNumber(generateRandomBetween(min, max, deviceNumber));
      setHasChanged(false);
      setRounds(rounds + 1);
      setGuessesList([...guessesList, deviceNumber]);
    }
  }, [min, max, hasChanged, deviceNumber]);

  useEffect(() => {
    if (deviceNumber === userNumber) {
      handleWin();
    }
  }, [deviceNumber, handleWin, userNumber]);

  return (
    <View style={GameScreenStyle.mainContainer}>
      <Title>Número predicho</Title>
      <NumberContainer>{deviceNumber}</NumberContainer>
      <Card>
        <Text style={GameScreenStyle.container}>¿Mayor o menor?</Text>
        <View style={GameScreenStyle.buttonsContainer}>
          <PrimaryButton
            outerStyle={GameScreenStyle.buttonOuterStyle}
            textStyle={GameScreenStyle.buttonTextStyle}
            onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton
            outerStyle={GameScreenStyle.buttonOuterStyle}
            textStyle={GameScreenStyle.buttonTextStyle}
            onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </Card>
      <Title
        style={GameScreenStyle.labelRecord}
        innerStyle={GameScreenStyle.labelRecordInner}>
        Intentos
      </Title>
      <FlatList
        data={guessesList}
        renderItem={item => {
          return (
            <Card>
              <Text style={GameScreenStyle.guessText}>
                {item.item.toString()}
              </Text>
            </Card>
          );
        }}
      />
      <View />
    </View>
  );
}

export default GameScreen;

import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { StartGameScreenStyle } from './StartGameScreen.style';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';

interface StartGameScreenProps {
  onPickFunction: any;
}

function StartGameScreen(props: StartGameScreenProps) {
  const [enteredValue, setEnteredValue] = useState('');
  function numberInputHandler(inputText: string) {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  function resetInputField() {
    setEnteredValue('');
  }

  function confirmHandler() {
    props.onPickFunction(enteredValue);
  }

  return (
    <View style={StartGameScreenStyle.rootContainer}>
      <Title>Adivina el Número</Title>
      <Card>
        <Text style={StartGameScreenStyle.container}>Ingresa un Número</Text>
        <TextInput
          style={StartGameScreenStyle.input}
          maxLength={2}
          keyboardType={'number-pad'}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={StartGameScreenStyle.buttonsContainer}>
          <PrimaryButton onPress={resetInputField}>Resetear</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>Confirmar</PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

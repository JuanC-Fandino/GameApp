import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { StartGameScreenStyle } from './StartGameScreen.style';

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

  return (
    <View style={StartGameScreenStyle.inputContainer}>
      <TextInput
        style={StartGameScreenStyle.input}
        maxLength={2}
        keyboardType={'number-pad'}
        value={enteredValue}
        onChangeText={numberInputHandler}
      />
      <View style={StartGameScreenStyle.buttonsContainer}>
        <PrimaryButton onPress={resetInputField}>Resetear</PrimaryButton>
        <PrimaryButton onPress={props.onPickFunction}>Confirmar</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;
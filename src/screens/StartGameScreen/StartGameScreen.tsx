import React, { useState } from 'react';
import { Text, TextInput, View, Platform } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { StartGameScreenStyle } from './StartGameScreen.style';
// @ts-ignore
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

  // const x = Platform.select({ ios: '0', android: '1' })
  // This line is equivalent to:
  // const x = Platform.OS === 'ios' ? '0' : '1'

  // We could also have two different files for each platform, and import them
  // depending on the platform. This is called platform-specific code.
  // To do this, we would have to create two files:
  // StartGameScreen.ios.tsx
  // StartGameScreen.android.tsx

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
      <Text style={{ alignSelf: 'flex-end', marginTop: 12 }}>
        {Platform.OS === 'ios' ? 'iOS' : 'Android'} {Platform.Version}
      </Text>
    </View>
  );
}

export default StartGameScreen;

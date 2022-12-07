import { Text, TextProps, View } from 'react-native';
import React from 'react';
import { TitleStyle } from './Title.style';

interface TitleProps extends TextProps {
  children: React.ReactNode;
}

function Title(props: TitleProps) {
  const { children } = props;
  return (
    <View style={TitleStyle.view}>
      <Text style={TitleStyle.text}>{children}</Text>
    </View>
  );
}

export default Title;

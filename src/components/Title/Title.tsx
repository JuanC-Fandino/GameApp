import { StyleProp, Text, TextProps, View, ViewStyle } from 'react-native';
import React from 'react';
import { TitleStyle } from './Title.style';

interface TitleProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Title(props: TitleProps) {
  const { children, style } = props;
  return (
    <View style={[TitleStyle.view, style]}>
      <Text style={TitleStyle.text}>{children}</Text>
    </View>
  );
}

export default Title;

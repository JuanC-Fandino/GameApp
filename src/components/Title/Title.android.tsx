import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { TitleStyle } from './Title.style';

interface TitleProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<TextStyle>;
}

function Title(props: TitleProps) {
  const { children, style, innerStyle } = props;
  return (
    <View style={[TitleStyle.view, style]}>
      <Text style={[TitleStyle.text, innerStyle]}>{children}</Text>
      <Text>Android</Text>
    </View>
  );
}

export default Title;

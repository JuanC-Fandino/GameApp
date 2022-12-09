import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { CardStyle } from './Card.style';
import React from 'react';
interface CardProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Card(props: CardProps) {
  return (
    <View style={[CardStyle.inputContainer, props.style]}>
      {props.children}
    </View>
  );
}

export default Card;

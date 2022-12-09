import { View, ViewProps } from 'react-native';
import { CardStyle } from './Card.style';
import React from 'react';
interface CardProps extends ViewProps {
  children?: React.ReactNode;
}

function Card(props: CardProps) {
  return <View style={CardStyle.inputContainer}>{props.children}</View>;
}

export default Card;

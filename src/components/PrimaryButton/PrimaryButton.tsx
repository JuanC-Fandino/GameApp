import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { PrimaryButtonStyle } from './PrimaryButton.style';
import Colors from '../../constants/Colors';

export interface CustomButtonProps extends PressableProps {
  children: React.ReactNode;
  innerStyle?: StyleProp<ViewStyle>;
  outerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

function PrimaryButton(props: CustomButtonProps) {
  const { children, innerStyle, outerStyle, textStyle, ...otherProps } = props;
  return (
    // We use the view here to prevent the ripple overflowing
    <View style={[PrimaryButtonStyle.outerContainer, outerStyle]}>
      <Pressable
        android_ripple={{ color: Colors.secondary600 }}
        style={({ pressed }) =>
          pressed
            ? [
                PrimaryButtonStyle.button,
                innerStyle,
                PrimaryButtonStyle.pressed,
              ]
            : [PrimaryButtonStyle.button, innerStyle]
        }
        {...otherProps}>
        <Text style={[PrimaryButtonStyle.text, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

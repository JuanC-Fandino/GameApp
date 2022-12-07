import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { PrimaryButtonStyle } from './PrimaryButton.style';
import Colors from '../../constants/Colors';

export interface CustomButtonProps extends PressableProps {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

function PrimaryButton(props: CustomButtonProps) {
  const { children, customStyle, ...otherProps } = props;
  return (
    // We use the view here to prevent the ripple overflowing
    <View style={PrimaryButtonStyle.outerContainer}>
      <Pressable
        android_ripple={{ color: Colors.secondary600 }}
        style={({ pressed }) =>
          pressed
            ? [
                PrimaryButtonStyle.button,
                customStyle,
                PrimaryButtonStyle.pressed,
              ]
            : [PrimaryButtonStyle.button, customStyle]
        }
        {...otherProps}>
        <Text style={[PrimaryButtonStyle.text]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

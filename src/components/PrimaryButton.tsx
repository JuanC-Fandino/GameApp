import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface CustomButtonProps extends PressableProps {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

function PrimaryButton(props: CustomButtonProps) {
  const { children, customStyle, ...otherProps } = props;
  return (
    // We use the view here to prevent the ripple overflowing
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: 'darkorange' }}
        style={({ pressed }) =>
          pressed
            ? [styles.button, customStyle, styles.pressed]
            : [styles.button, customStyle]
        }
        {...otherProps}>
        <Text style={[styles.text]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    overflow: 'hidden',
    borderRadius: 6,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: 'orange',
    alignItems: 'center',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const PrimaryButtonStyle = StyleSheet.create({
  outerContainer: {
    overflow: 'hidden',
    borderRadius: 6,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: Colors.primary500,
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

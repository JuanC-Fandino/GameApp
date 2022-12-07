import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const NumberContainerStyle = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    borderRadius: 6,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary500,
  },
  numberText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

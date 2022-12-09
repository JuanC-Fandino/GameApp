import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const NumberContainerStyle = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: Colors.secondary600,
  },
  numberText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

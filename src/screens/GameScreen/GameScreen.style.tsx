import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const GameScreenStyle = StyleSheet.create({
  mainContainer: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: Colors.secondary500,
    borderRadius: 6,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

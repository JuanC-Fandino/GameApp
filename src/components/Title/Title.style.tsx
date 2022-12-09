import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const TitleStyle = StyleSheet.create({
  view: {
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

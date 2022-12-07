import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const TitleStyle = StyleSheet.create({
  view: {
    backgroundColor: Colors.secondary500,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

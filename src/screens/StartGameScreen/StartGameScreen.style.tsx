import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const StartGameScreenStyle = StyleSheet.create({
  container: {
    alignSelf: 'center',
    fontSize: 24,
    color: 'white',
  },
  input: {
    borderRadius: 6,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    marginBottom: 16,
    color: Colors.primary500,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rootContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 24,
    padding: 16,
  },
});

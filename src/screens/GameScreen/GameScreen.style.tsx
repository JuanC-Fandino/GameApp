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
  container: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  buttonsContainer: {
    marginVertical: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonOuterStyle: {
    width: 100,
  },
  labelRecord: {
    marginVertical: 16,
  },
  labelRecordInner: {
    fontSize: 24,
  },
  guessText: {
    fontSize: 18,
    color: 'white',
  },
});

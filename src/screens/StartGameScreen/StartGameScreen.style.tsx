import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const StartGameScreenStyle = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 8,
    marginTop: 24,
    padding: 16,
    borderRadius: 6,
    elevation: 8, // Only for Android
    backgroundColor: Colors.secondary500,
    // Only for iOS
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
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
});

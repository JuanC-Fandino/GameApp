import { StyleSheet } from 'react-native';

export const StartGameScreenStyle = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 8,
    marginTop: 24,
    padding: 16,
    borderRadius: 6,
    elevation: 8, // Only for Android
    backgroundColor: 'gray',
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
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    marginBottom: 16,
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

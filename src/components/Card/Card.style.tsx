import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const CardStyle = StyleSheet.create({
  inputContainer: {
    // marginHorizontal: 8,
    marginTop: 8,
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
});

import { Text, View } from 'react-native';
import { NumberContainerStyle } from './NumberContainer.style';

// @ts-ignore
function NumberContainer({ children }) {
  return (
    <View style={NumberContainerStyle.container}>
      <Text style={NumberContainerStyle.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

import { StyleSheet } from 'react-native';
export const GameOverScreenStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    marginHorizontal: 8,
  },
  summaryContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 8,
    overflow: 'hidden',
  },
  imageContainerLandscape: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  summary: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  highlight: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

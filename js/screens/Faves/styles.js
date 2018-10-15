import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat-Regular',
      },
      android: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
      },
    }),
  },
});

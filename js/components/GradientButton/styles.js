import { StyleSheet } from 'react-native';

import { colours, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    borderRadius: 22,
    margin: 20,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: colours.white,
    fontFamily: fonts.fontMain,
  },
});

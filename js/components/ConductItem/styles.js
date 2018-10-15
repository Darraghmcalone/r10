import { StyleSheet } from 'react-native';
import { colours } from '../../config/styles';
import { fonts } from '../../config/styles';

export const styles = StyleSheet.create({
  conductHeader: {
    fontFamily: fonts.regular,
    color: colours.purple,
    fontSize: 20,
    margin: 12,
  },
  conductText: {
    fontFamily: fonts.light,
    fontSize: 20,
    margin: 12,
  },
});

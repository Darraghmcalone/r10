import { StyleSheet } from 'react-native';
import { colours, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
    sessionItem: {
        padding: 12,
    },
    sessionItemMeta: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    title: {
        fontFamily: fonts.fontMain,
    },
    location: {
        color: colours.mediumGrey,
        fontFamily: fonts.fontMain,
        fontSize: 12,
    },
});
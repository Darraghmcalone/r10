import { StyleSheet } from 'react-native';

import { colours, fonts } from '../../config/styles';

const { mediumGrey } = colours;
const { fontMain } = fonts;

export const styles = StyleSheet.create({
    presentedBy: {
        color: mediumGrey,
        fontFamily: fontMain,
        marginTop: 24,
        marginBottom: 12
    },
    speaker: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    speakerName: {
        fontFamily: fontMain,
        padding: 2
    },
    speakerImage: {
        borderRadius: 25,
        height: 50,
        marginRight: 8,
        width: 50
    }
});
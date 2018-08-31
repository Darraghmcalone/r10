import { StyleSheet } from 'react-native';
import { fonts } from '../../config/styles'



export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    paragraph: {
        fontSize: 20,
        fontFamily: fonts.regular,
        textAlign: 'left',
        margin: 13,
    },
    heading: {
        fontSize: 24,
        fontFamily: fonts.light,
        fontWeight: 'bold',
        margin: 13,
    },
    image: {
        resizeMode: 'center',
        margin: 13,
        marginLeft: 90

    }

});

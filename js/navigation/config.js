import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { colours, fonts } from '../config/styles'

export const styles = StyleSheet.create({
    gradientHeader: {
        backgroundColor: 'white',
        overflow: 'hidden'
    },

})
const GradientHeader = (props) => (
    <View style={styles.gradientHeader}>
        <LinearGradient
            colors={[colours.red, colours.purple]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 64, width: '100%' }]}
        />
        <Header {...props} />
    </View>
);

export const sharedNavigationOptions = (navigation) => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
        backgroundColor: 'transparent',
        color: colours.white,
        fontFamily: fonts.regurlar
    },
    headerTitleStyle: {
        color: colours.white,
        fontFamily: fonts.regurlar
    }
});

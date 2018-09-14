import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { colours } from '../../config/styles';

const GradientButton = ({ buttonText, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    colors={[colours.purple, colours.blue]}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 0.9, y: 1.0 }}
                    style={styles.linearGradient}
                >
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

GradientButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default GradientButton;
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './styles';

const SessionSpeaker = ({ speakerData }) => {
    return (
        <View>
            <Text style={styles.presentedBy}>Presented by:</Text>
            <View style={styles.speaker}>
                {speakerData.image && (
                    <Image
                        source={{ uri: speakerData.image }}
                        style={styles.speakerImage}
                    />
                )}
                <Text style={styles.speakerName}>{speakerData.name}</Text>
            </View>
        </View>
    );
};

SessionSpeaker.propTypes = {
    speakerData: PropTypes.shape({
        bio: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        url: PropTypes.string
    }),
};

export default SessionSpeaker;
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './styles';

const onSpeakerPress = (navigation, speakerData) => {
  navigation.push('Speaker', { speakerData });
};

const SessionSpeaker = ({ navigation, speakerData }) => {
  return (
    <View>
      <Text style={styles.presentedBy}>Presented by:</Text>
      <View style={styles.speaker}>
        <TouchableOpacity
          onPress={() => onSpeakerPress(navigation, speakerData)}
        >
          {speakerData.image && (
            <Image
              source={{ uri: speakerData.image }}
              style={styles.speakerImage}
            />
          )}
          <Text style={styles.speakerName}>{speakerData.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SessionSpeaker.propTypes = {
  speakerData: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
};

export default withNavigation(SessionSpeaker);

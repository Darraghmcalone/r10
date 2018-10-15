import React from 'react';
import { ScrollView, Text, View, Platform } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import PropTypes from 'prop-types';
import { styles } from './styles';
import GradientButton from '../../components/GradientButton';
import Separator from '../../components/Separator';
import SessionSpeaker from '../../components/SessionSpeaker';

const Session = ({
  speakerData,
  sessionItemData,
  faveIds,
  addFave,
  removeFave,
}) => {
  const allFaves = [];
  faveIds.map((item) => allFaves.push(item.id));
  const isFaved = allFaves.includes(sessionItemData.id);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sessionMeta}>
        <Text style={styles.location}>{sessionItemData.location}</Text>
        {isFaved ? (
          <Icons
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            color="red"
            backgroundColor="transparent"
            size={20}
          />
        ) : null}
      </View>
      <Text style={styles.title}>{sessionItemData.title}</Text>
      <Text style={styles.time}>
        {moment
          .utc(sessionItemData.startTime)
          .utcOffset('-08:00')
          .format('h:mm A')}
      </Text>
      {sessionItemData.description && (
        <Text style={styles.description}>{sessionItemData.description}</Text>
      )}

      {speakerData.name && <SessionSpeaker speakerData={speakerData} />}

      <Separator />
      {isFaved ? (
        <GradientButton
          buttonText="Remove from Faves"
          onPress={() => removeFave(sessionItemData.id)}
        />
      ) : (
        <GradientButton
          buttonText="Add to Faves"
          onPress={() => addFave(sessionItemData.id)}
        />
      )}
    </ScrollView>
  );
};
export default Session;

Session.propTypes = {
  speakerData: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  sessionItemData: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    location: PropTypes.string,
    speaker: PropTypes.shape({
      id: PropTypes.string,
    }),
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

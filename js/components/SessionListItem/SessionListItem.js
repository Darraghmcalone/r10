import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, View, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import { colours } from '../../config/styles';
import { styles } from './styles';
import Icons from 'react-native-vector-icons/Ionicons';

const onItemPress = (navigation, sessionItemData) => {
  navigation.push('Session', { sessionItemData });
};

const SessionListItem = ({ navigation, sessionItemData, faveIds }) => {
  const allFaves = [];
  faveIds.map((item) => allFaves.push(item.id));
  const isFaved = allFaves.includes(sessionItemData.id);
  return (
    <TouchableHighlight
      onPress={() => onItemPress(navigation, sessionItemData)}
      underlayColor={colours.lightGrey}
    >
      <View style={styles.sessionItem}>
        <View style={styles.sessionItemMeta}>
          <Text style={styles.title}>{sessionItemData.title}</Text>
          {isFaved ? (
            <Icons
              name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
              color="red"
              backgroundColor="transparent"
              size={20}
            />
          ) : null}
        </View>
        <Text style={styles.location}>{sessionItemData.location}</Text>
      </View>
    </TouchableHighlight>
  );
};

SessionListItem.propTypes = {
  navigation: PropTypes.object.isRequired,
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

export default withNavigation(SessionListItem);

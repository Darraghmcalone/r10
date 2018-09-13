import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import { styles } from './styles';

const SessionListHeader = ({ time }) => {
    return (
        <Text style={styles.timeHeader}>
            {moment
                .utc(time)
                .format('h:mm A')}
        </Text>
    );
}

SessionListHeader.propTypes = {
    time: PropTypes.string.isRequired
};

export default SessionListHeader;
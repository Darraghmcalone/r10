import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default class SessionItem extends Component {
    render() {
        const { itemData } = this.props;

        return (
            <View>
                <Text>{itemData.startTime}</Text>
                <Text>{itemData.title}</Text>
                <Text>{itemData.location}</Text>
            </View>
        );
    }
}

SessionItem.propTypes = {
    itemData: PropTypes.shape({
        startTime: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    })
};

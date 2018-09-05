import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default class ConductItem extends Component {
    render() {
        const { itemData } = this.props;

        return (
            <View>
                <Text style={styles.conductHeader}>{itemData.title}</Text>
                <Text style={styles.conductText}>{itemData.description}</Text>
            </View>
        );
    }
}

ConductItem.propTypes = {
    itemData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};

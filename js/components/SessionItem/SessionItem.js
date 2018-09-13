import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList, Item, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { formatAMPM } from '../../config/helpers'

export default class SessionItem extends Component {
    render() {
        const { sessions } = this.props;
        return (
            <View>
                <SectionList
                    renderItem={({ item, index }) => <View key={index}>
                        <Text>{item.title}</Text>
                        <Text>{item.location}</Text>
                    </View>}
                    renderSectionHeader={({ section, onPress }) =>
                        <TouchableHighlight
                            underlayColor={"transparent"}
                            onPress={() => this.props.navigation('Session')}
                        >
                            <Text style={styles.eventTitle}>
                                {formatAMPM(section.title)}
                            </Text>
                        </TouchableHighlight>
                    }
                    sections={sessions}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

SessionItem.propTypes = {
    sessions: PropTypes.array.isRequired,
    title: PropTypes.shape({
        title: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        startTime: PropTypes.object.isRequired,
    })
};
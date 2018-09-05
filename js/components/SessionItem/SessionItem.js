import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import { styles } from './styles';
import { formatAMPM } from '../../config/helpers'

export default class SessionItem extends Component {
    render() {
        const { itemData } = this.props;

        return (
            <View>
                <SectionList
                    renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{
                                formatAMPM(`${itemData.startTime}`)}</Text>
                        </View>
                    )}
                    sections={[
                        { title: <Text>{(itemData.startTime)}</Text>, data: [itemData.title, itemData.location] },

                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

// SessionItem.propTypes = {
//     itemData: PropTypes.shape({
//         startTime: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         location: PropTypes.string.isRequired
//     })
// };

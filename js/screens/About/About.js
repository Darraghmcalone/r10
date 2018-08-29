import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const About = ({ allConducts }) => {
    console.log('allConducts:', allConducts);

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                R10 is a conference that focuses on just about
                any topic related to dev.
            </Text>
            <Text style={styles.heading}>
                Dates & Venues
            </Text>
            <Text style={styles.paragraph}>
                The R10 conference will take place on 27 June 2019
                at Olympia London.
            </Text>
        </View>
    );
}

export default About;
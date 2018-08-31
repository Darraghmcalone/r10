import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles';
import ConductItem from '../../components/ConductItem'

const About = ({ allConducts }) => {
    console.log('allConducts:', allConducts);

    return (
        <ScrollView style={styles.container}>
            <Image
              style={ styles.image }
              source={require('../../assets/images/r10_logo.png')}
            />

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
            <Text style={styles.heading}>
                Code of Conduct
            </Text>
            <View>
                {allConducts.map((item) => <ConductItem key={item.id} itemData={item} />)}
            </View>
            <Text style={styles.heading}>
                © RED ACADEMY 2017
            </Text>
        </ScrollView>
    );
}



export default About;

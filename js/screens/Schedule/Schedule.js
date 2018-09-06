import React from 'react';
import { ScrollView, View, Text, Image, SectionList } from 'react-native';
import { styles } from './styles';
import SessionItem from '../../components/SessionItem'


const Schedule = ({ allSessions }) => {
    return (
        <ScrollView>
            <View>
            <SessionItem sessions={allSessions} />
            </View>
        </ScrollView>
    )
}

export default Schedule;

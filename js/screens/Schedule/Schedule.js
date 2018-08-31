import React from 'react';
import { Sectionlist, ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles';
import SessionItem from '../../components/SessionItem'

const Schedule = ({ allSessions }) => {
    return (
        <ScrollView>
            <View>
            <View>
                {allSessions.map((item) => <SessionItem key={item.id} itemData={item} />)}
            </View>
            </View>
        </ScrollView>
    )
}

export default Schedule;
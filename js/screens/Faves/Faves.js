import React from 'react';
import { ScrollView, View, Text, Image, Platform } from 'react-native';
import { styles } from './styles';

const Faves = () => {
    return (
        <ScrollView>
            <View>
                <Text>
                    Faves
                </Text>
                <View>
                    <Text style={styles.container}>I can be seen an all platforms.</Text>
                    {Platform.OS === 'ios' && <Text>You'll only see me on iOS devices.</Text>}
                    {Platform.Version && (
                        <Text style={styles.container}>And I'm only on Android devices running Nougat.</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

export default Faves;
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { colours } from '../../config/styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" color={colours.red} />
    </View>
  );
};

export default Loader;

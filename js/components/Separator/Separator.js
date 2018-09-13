import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { styles } from './styles';
import { colours } from '../../config/styles';

const Separator = ({ colour, style }) => {
  return <View style={[styles.separator, { backgroundColor: colour }, style]} />;
};

Separator.defaultProps = {
  colour: colours.lightGrey
};

Separator.propTypes = {
  colour: PropTypes.string,
  style: PropTypes.any
};

export default Separator;
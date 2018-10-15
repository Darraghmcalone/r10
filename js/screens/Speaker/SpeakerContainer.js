import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Speaker from './Speaker';

export default class SpeakerContainer extends Component {
  render() {
    const { speakerData } = this.props.navigation.state.params;

    return <Speaker speakerData={speakerData} />;
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

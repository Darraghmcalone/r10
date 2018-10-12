import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, View, Platform } from "react-native";
import moment from "moment";
import { styles } from "./styles";
import Separator from "../../components/Separator";
import SessionSpeaker from "../../components/SessionSpeaker";
import Icons from "react-native-vector-icons/Ionicons";

export default class Session extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { speakerData, sessionItemData } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.sessionMeta}>
          <Text style={styles.location}>{sessionItemData.location}</Text>
          <Icons
            name={Platform.select({
              ios: "ios-heart",
              android: "md-heart"
            })}
            size={20}
            color="#cf392a"
          />
        </View>
        <Text style={styles.title}>{sessionItemData.title}</Text>
        <Text style={styles.time}>
          {moment
            .utc(sessionItemData.startTime)
            .utcOffset("-08:00")
            .format("h:mm A")}
        </Text>
        {sessionItemData.description && (
          <Text style={styles.description}>{sessionItemData.description}</Text>
        )}

        {speakerData.name && <SessionSpeaker speakerData={speakerData} />}

        <Separator />
      </ScrollView>
    );
  }
}

Session.propTypes = {
  speakerData: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    url: PropTypes.string
  }),
  sessionItemData: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    location: PropTypes.string,
    speaker: PropTypes.shape({
      id: PropTypes.string
    }),
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

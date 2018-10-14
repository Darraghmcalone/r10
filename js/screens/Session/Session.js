import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, View, Platform, Button } from "react-native";
import moment from "moment";
import { styles } from "./styles";
import Separator from "../../components/Separator";
import SessionSpeaker from "../../components/SessionSpeaker";
import Icons from "react-native-vector-icons/Ionicons";

const Session = ({
  speakerData,
  sessionItemData,
  faveIds,
  addFave,
  removeFave
}) => {
  console.log("this is faved", faveIds);
  console.log("Session screen: sessionItemData:", sessionItemData);
  const allFaves = [];
  faveIds.map(item => allFaves.push(item.id));
  const isFaved = allFaves.includes(sessionItemData.id);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sessionMeta}>
        <Text style={styles.location}>{sessionItemData.location}</Text>
        {isFaved ? (
          <Icons
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            color="red"
            backgroundColor="transparent"
            size={20}
          />
        ) : null}
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
      {isFaved ? (
        <Button
          title="Remove from Faves"
          onPress={() => removeFave(sessionItemData.id)}
        />
      ) : (
        <Button
          title="Add to Faves"
          onPress={() => addFave(sessionItemData.id)}
        />
      )}
    </ScrollView>
  );
};
export default Session;

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

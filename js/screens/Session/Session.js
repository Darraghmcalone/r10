import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, View, Platform } from "react-native";
import moment from "moment";
import { styles } from "./styles";
import Separator from "../../components/Separator";
import SessionSpeaker from "../../components/SessionSpeaker";
import Icons from "react-native-vector-icons/Ionicons";

const Session = ({ speakerData, sessionItemData, faveIds }) => {
  const favesArr = [];
  faveIds.faveIds.map(fave => favesArr.push(fave.id));
  const isFaved = favesArr.includes(sessionItemData.speaker.id);
  sessionId = navigation.getParam("itemID");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sessionMeta}>
        <Text style={styles.location}>{sessionItemData.location}</Text>
        {isFaved && <Icon name="md-heart" size={15} color="#cf392a" />}
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
      <View>
        {isFaved ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => faveIds.removeFave(sessionItemData.speaker.id)}
          >
            <Text>Remove Faves</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              faveIds.addFave(sessionItemData.speaker.id);
            }}
          >
              <Text>Add Faves</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

// Session.propTypes = {
//   speakerData: PropTypes.shape({
//     bio: PropTypes.string,
//     image: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     url: PropTypes.string
//   }),
//   sessionItemData: PropTypes.shape({
//     description: PropTypes.string,
//     id: PropTypes.string.isRequired,
//     location: PropTypes.string,
//     speaker: PropTypes.shape({
//       id: PropTypes.string
//     }),
//     startTime: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   })
// };

export default Session;

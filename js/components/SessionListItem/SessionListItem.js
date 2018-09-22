import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View, Platform } from "react-native";
import { withNavigation } from "react-navigation";
import { colours } from "../../config/styles";
import { styles } from "./styles";
import Icons from "react-native-vector-icons/Ionicons";

const onItemPress = (navigation, sessionItemData) => {
  console.log("onItemPress: sessionItemData:", sessionItemData);
  console.log("onItemPress: navigation:", navigation);
  navigation.push("Session", { sessionItemData });
};

const SessionListItem = ({ navigation, sessionItemData }) => {
  return (
    <TouchableHighlight
      onPress={() => onItemPress(navigation, sessionItemData)}
      underlayColor={colours.lightGrey}
    >
      <View style={styles.sessionItem}>
        <Text style={styles.title}>{sessionItemData.title}</Text>
        <View style={styles.sessionItemMeta}>
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
      </View>
    </TouchableHighlight>
  );
};

SessionListItem.propTypes = {
  // faveIds: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
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

export default withNavigation(SessionListItem);

import React from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { goToUrl } from "../../lib/helpers";
import GradientButton from "../../components/GradientButton";

import { colours } from "../../config/styles";
import { styles } from "./styles";

const Speaker = ({ navigation, speakerData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.speakerHeader}>
        <View style={styles.closeIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="ios-close" size={36} color={colours.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>About the Speaker</Text>
      </View>
      <View style={styles.speakerCard}>
        <ScrollView contentContainerStyle={styles.scrollviewContainer}>
          {speakerData.image && (
            <Image
              source={{ uri: speakerData.image }}
              style={styles.speakerImage}
            />
          )}
          <Text style={styles.speakerName}>{speakerData.name}</Text>
          {speakerData.bio && (
            <Text style={styles.speakerBio}>{speakerData.bio}</Text>
          )}
          {speakerData.url && (
            <GradientButton
              onPress={() => goToUrl(speakerData.url)}
              buttonText="Read More on Wikipedia"
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

Speaker.propTypes = {
  navigation: PropTypes.object,
  speakerData: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    url: PropTypes.string
  }).isRequired
};

export default withNavigation(Speaker);

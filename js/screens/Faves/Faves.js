import React from "react";
import { StatusBar, ScrollView, Text } from "react-native";
import SessionList from "../../components/SessionList";
import styles from "./styles";
const Faves = ({ sessions, navigation, faveIds }) => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      {sessions.length > 0 ? (
        <SectionLists
          sessions={sessions}
          navigation={navigation}
          faveIds={faveIds}
        />
      ) : (
        <Text>Add some Favorites to see them here!</Text>
      )}
    </ScrollView>
  );
};

export default Faves;

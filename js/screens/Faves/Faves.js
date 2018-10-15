import React from "react";
import { ScrollView, Text } from "react-native";
import SessionList from "../../components/SessionList";

const Faves = ({ allSessions, faveIds }) => {
  return (
    <ScrollView>
      {allSessions.length > 0 ? (
        <SessionList sessionData={allSessions} faveIds={faveIds} />
      ) : (
        <Text>Add some Favorites to see them here!</Text>
      )}
    </ScrollView>
  );
};

export default Faves;

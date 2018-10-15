import React from "react";
import PropTypes from "prop-types";
import { SectionList } from "react-native";
import SessionListHeader from "../SessionListHeader";
import SessionListItem from "../SessionListItem";
import Separator from "../Separator";

const SessionList = ({ sessionData, faveIds }) => {
  return (
    <SectionList
      sections={sessionData}
      faveIds={faveIds}
      renderSectionHeader={({ section }) => (
        <SessionListHeader time={section.title} />
      )}
      renderItem={({ item }) => (
        <SessionListItem faveIds={faveIds} sessionItemData={item} />
      )}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item.id}
      stickySectionHeadersEnabled
    />
  );
};

SessionList.propTypes = {
  sessionData: PropTypes.array.isRequired
};

export default SessionList;

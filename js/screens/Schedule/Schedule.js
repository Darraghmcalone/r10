import React from "react";
import { PropTypes } from "prop-types";
import { ScrollView } from "react-native";
import SessionList from "../../components/SessionList";

const Schedule = ({ allSessions, faveIds }) => {
  console.log("faveIds in Schedule", faveIds);
  return (
    <ScrollView>
      <SessionList sessionData={allSessions} faveIds={faveIds} />
    </ScrollView>
  );
};

Schedule.propTypes = {
  allSessions: PropTypes.array.isRequired
};

export default Schedule;

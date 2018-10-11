import React, { Component } from "react";
import Schedule from "./Schedule";
import Loader from "../../components/Loader";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { formatSessionData } from "../../lib/helpers";
import FavesContext from "../../context/FavesContext";

const allSessionsQuery = gql`
  query {
    allSessions {
      startTime
      title
      location
      id
      description
      speaker {
        id
      }
    }
  }
`;

export default class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={allSessionsQuery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return (
          <FavesContext.Consumer>
            {values => {
              faveIdArr = [];
              values.faveIds.map(item => faveIdArr.push(item.id));
              return (
                <Schedule
                  allSessions={formatSessionData(data.allSessions)}
                  faveIds={values}
                />
              );
            }}
          </FavesContext.Consumer>
          )
        }}
      </Query>
    );
  }
}

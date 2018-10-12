import React, { Component } from "react";
import Loader from "../../components/Loader";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const speakerQuery = gql`
  query($id: ID) {
    Speaker(id: $id) {
      bio
      image
      name
      url
    }
  }
`;

export default class SessionContainer extends Component {
  render() {
    const { sessionItemData } = this.props.navigation.state.params;
    return (
      <Query
        query={speakerQuery}
        variables={{ id: sessionItemData.speaker.id }}
      >
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return (
            <Session
              speakerData={data.Speaker}
              sessionItemData={sessionItemData}
            />
          );
        }}
      </Query>
    );
  }
}

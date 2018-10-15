import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../context/FavesContext';
import Loader from '../../components/Loader';
import Session from './Session';

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
            <FavesContext.Consumer>
              {(values) => {
                return (
                  <Session
                    speakerData={data.Speaker}
                    sessionItemData={sessionItemData}
                    faveIds={values.faveIds}
                    addFave={values.addFave}
                    removeFave={values.removeFave}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

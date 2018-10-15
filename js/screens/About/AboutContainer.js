import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import About from './About';
import Loader from '../../components/Loader';

const allConductsquery = gql`
  query {
    allConducts {
      title
      description
      id
    }
  }
`;

export default class AboutContainer extends Component {
  render() {
    return (
      <Query query={allConductsquery}>
        {({ loading, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

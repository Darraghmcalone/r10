import React, { Component } from 'react';
import { AboutContainer } from './screens/About';
import { ApolloProvider } from 'react-apollo'
import client from './config/api'
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <AboutContainer />
      </ApolloProvider>
    );
  }
}
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import RootStack from './navigation/RootStackNavigator';
import client from './config/api';
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}
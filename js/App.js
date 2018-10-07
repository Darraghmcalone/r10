import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import RootStack from "./navigation/RootStackNavigator";
import client from "./config/api";
import { FavesProvider } from "./context/FavesContext";
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStack />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

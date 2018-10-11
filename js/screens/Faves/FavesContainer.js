import React, { Component } from "react";
import Faves from "./Faves";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator, View } from "react-native";

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              startTime
              location
              title
              id
            }
          }
        `}
      >
        {({ loading, error, data: { allSessions } }) => {
          if (loading)
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" />
              </View>
            );
          if (error) return <Text>Error :(</Text>;

          return (
            <FavesContext.Consumer>
              {values => {
                const favesIdArr = [];
                values.faveIds.map(item => favesIdArr.push(item.id));
                const favedSessions = allSessions.filter(session =>
                  favesIdArr.includes(session.id)
                );

                let sessions = favedSessions
                  .reduce((acc, curr) => {
                    const timeExists = acc.find(
                      section => section.title === curr.startTime
                    );
                    timeExists
                      ? timeExists.data.push(curr)
                      : acc.push({
                          title: curr.startTime,
                          data: [curr]
                        });
                    return acc;
                  }, [])
                  .sort((a, b) => a.title - b.title);

                return (
                  <Faves
                    navigation={this.props.navigation}
                    faveIds={favesIdArr}
                    sessions={sessions}
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

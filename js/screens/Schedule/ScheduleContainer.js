import React, { Component } from 'react';
import Schedule from './Schedule';
import Loader from '../../components/Loader'
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import { formatSessionData } from '../../config/helpers'

const allSessionquery = gql`
query {
    allSessions{
      startTime
      title
      location
      id
    }
  }
    `;
export default class ScheduleContainer extends Component {
    render() {
        const {  data } = this.props;
        
        return (
            <Query query={allSessionquery}>
                {
                    ({ loading, data }) => {
                        if (loading || !data) {
                            return <Loader />
                        }
                        return <Schedule allSessions={data.allSessions} />
                    }
                }
            </Query>
        );
    }
}
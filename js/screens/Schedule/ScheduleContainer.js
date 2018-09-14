import React, { Component } from 'react';
import Schedule from './Schedule';
import Loader from '../../components/Loader'
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import { formatSessionData } from '../../lib/helpers';

const allSessionsQuery = gql`
    query {
        allSessions{
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
                {
                    ({ loading, data }) => {
                        if (loading || !data) {
                            return <Loader />
                        }
                        return <Schedule
                            allSessions={formatSessionData(data.allSessions)} />
                    }
                }
            </Query>
        );
    }
}
import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import { AboutContainer } from '../screens/About';
import { colours, fonts } from '../config/styles';
import { FavesContainer } from '../screens/Faves';
import { ScheduleContainer } from '../screens/Schedule';
import { SessionContainer } from '../screens/Session';
import { SpeakerContainer } from '../screens/Speaker'
import { MapContainer } from '../screens/Map'

const AboutStack = createStackNavigator(
    {
        About: AboutContainer,
    },
    {
        headermode: 'none'
    }
);

const FavesStack = createStackNavigator(
    {

        Faves: FavesContainer,
    },
    {
        headermode: 'none'
    }
);

const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleContainer,
    },
    {
        headermode: 'none'
    }
);

const SessionStack = createStackNavigator(
    {
        Session: SessionContainer,
    },
    {
        headermode: 'none'
    }
);

const SpeakerStack = createStackNavigator(
    {
        Speaker: SpeakerContainer
    },
    {
        headermode: 'none'
    }
);
const MapStack = createStackNavigator(
    {
        Map: MapContainer
    },
    {
        headermode: 'none'
    }
);
// Dedicated stacks for Schedule and Faves will go here too!

export default createBottomTabNavigator(
    {
        About: { screen: AboutStack },
        Faves: { screen: FavesStack },
        Schedule: { screen: ScheduleStack },
        Session: { screen: SessionStack },
        Speaker: { screen: SpeakerStack },
        Map:{ screen: MapStack }
    },
    {
        tabBarOptions: {
            activeTintColor: colours.white,

            labelStyle: {
                fontSize: 10,
            },
            style: {
                backgroundColor: colours.black,
            },
        },
    }

);

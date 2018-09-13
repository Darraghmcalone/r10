import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { colours, fonts } from '../config/styles';
import { sharedNavigationOptions } from './config';
import { FavesContainer } from '../screens/Faves';
import { ScheduleContainer } from '../screens/Schedule';
import { AboutContainer } from '../screens/About';
import { MapContainer } from '../screens/Map'

const renderIcon = (iconName, tintColor) => (
    <Icon name={iconName} size={25} color={tintColor} />
);

const AboutStack = createStackNavigator(
    {
        About: AboutContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation)
        })
    }
);
const FavesStack = createStackNavigator(
    {

        Faves: FavesContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation)
        })
    }
);
const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation)
        })
    }
);
const MapStack = createStackNavigator(
    {
        Map: MapContainer,
    },
    {
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'mahjghp',
            title: navigation.state.routeName,
            ...sharedNavigationOptions(navigation)
        })
    }
);

MapStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-map', tintColor)
};
ScheduleStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-calendar', tintColor)
};
AboutStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-information-circle', tintColor)
};
FavesStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-heart', tintColor)
};
export default MyApp = createDrawerNavigator(
    {
        Map: MapStack,
        Schedule: ScheduleStack,
        About: AboutStack,
        Faves: FavesStack
    },
    {
        drawerWidth: 200,
        contentOptions: {
            activeTintColor: colours.purple,
            inActiveTintColor: colours.black,
            activeLabelStyle: {
                color: colours.purple
            },
            labelStyle: {
                color: colours.black,
            }
        }
    }
);

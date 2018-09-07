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

AboutStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-information-circle', tintColor)
};

export default MyApp = createDrawerNavigator(
    {
        About: AboutStack,
        Faves: FavesStack
    },
    {
        drawerWidth: 200,
        contentOptions: {
            activeTintColor: colours.white,
            inActiveTintColor: colours.black,
            activeLabelStyle: {
                color: "purple"
            },
            labelStyle: {
                color: "mediumGrey",
            }
        }
    }
);
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { AboutContainer } from '../screens/About';

const RootStack = createStackNavigator(
    {
        About: {
            screen: AboutContainer,
            navigationOptions: {
                title: 'About',
            },
        }
    });
export default RootStack;

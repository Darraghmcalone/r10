import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, LayoutAnimation, Animated, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default class ConductItem extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            rotate: new Animated.Value(0)
        }
    }
    render() {
        const { itemData } = this.props;

        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        LayoutAnimation.easeInEaseOut();

                        this.state.open
                            ? Animated.timing(this.state.rotate, {
                                toValue: 0,
                                duration: 200
                            }).start(() => this.setState({ open: !this.state.open }))
                            : Animated.timing(this.state.rotate, {
                                toValue: 1,
                                duration: 300
                            }).start(() => this.setState({ open: !this.state.open }));
                    }}
                    style={{ flexDirection: "row" }}
                >
                    <Text style={styles.conductHeader}>{itemData.title}</Text>
                </TouchableOpacity>

                <Text style={[styles.conductText, { height: this.state.open ? "auto" : 0 }]}>{itemData.description}</Text>
            </View>
        );
    }

}

ConductItem.propTypes = {
    itemData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};

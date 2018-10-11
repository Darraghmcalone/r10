import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  UIManager
} from "react-native";
import { styles } from "./styles";

export default class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    this.setState({
      opened: !this.state.opened
    });
  }
  render() {
    const { itemData } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={this._onPress}>
          <Text style={styles.conductHeader}>
            {this.state.opened ? "- " : "+ "}
            {itemData.title}
          </Text>
          {this.state.opened && (
            <Text style={[styles.conductText]}>{itemData.description}</Text>
          )}
        </TouchableOpacity>
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

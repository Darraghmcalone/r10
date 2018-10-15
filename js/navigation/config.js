import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { colours, fonts } from "../config/styles";

const styles = StyleSheet.create({
  gradientHeader: {
    backgroundColor: colours.white,
    overflow: "hidden"
  }
});

const GradientHeader = props => (
  <View style={styles.gradientHeader}>
    <LinearGradient
      colors={[colours.red, colours.purple]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

const MenuButton = ({ navigation }) => (
  <Icon
    name="md-menu"
    size={25}
    color={colours.white}
    onPress={navigation.openDrawer}
    style={{ marginLeft: fonts.baseSize * 0.67 }}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTintColor: colours.white,
  headerTitleStyle: {
    color: colours.white,
    fontFamily: fonts.fontMain
  },
  ...Platform.select({
    android: {
      headerLeft: <MenuButton navigation={navigation} />
    }
  })
});

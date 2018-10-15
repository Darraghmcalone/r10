import { StyleSheet } from "react-native";

import { colours, fonts } from "../../config/styles";

const { mediumGrey, red, white } = colours;
const { fontMain, fontMainLight } = fonts;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    padding: 18
  },
  sessionMeta: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  location: {
    color: mediumGrey,
    fontFamily: fontMain
  },
  title: {
    fontFamily: fontMain,
    fontSize: 24,
    marginBottom: 12
  },
  time: {
    color: red,
    fontFamily: fontMain,
    marginBottom: 12
  },
  description: {
    fontFamily: fontMainLight,
    fontSize: 16,
    lineHeight: 24
  }
});

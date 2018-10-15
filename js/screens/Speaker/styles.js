import { StyleSheet } from "react-native";

import { colours, fonts } from "../../config/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.black,
    flex: 1
  },
  speakerHeader: {
    alignItems: "center",
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    position: "relative"
  },
  closeIcon: {
    left: 12,
    position: "absolute",
    top: 24
  },
  headerText: {
    color: colours.white,
    fontFamily: fonts.fontMain
  },
  speakerCard: {
    backgroundColor: colours.white,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 0.85,
    marginLeft: 12,
    marginRight: 12
  },
  scrollviewContainer: {
    alignItems: "center",
    padding: 18
  },
  speakerImage: {
    borderRadius: 50,
    height: 100,
    marginBottom: 18,
    width: 100
  },
  speakerName: {
    fontFamily: fonts.fontMain,
    fontSize: 24,
    marginBottom: 18
  },
  speakerBio: {
    fontFamily: fonts.fontMainLight,
    lineHeight: 22
  }
});

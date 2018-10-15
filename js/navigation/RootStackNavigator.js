import { createStackNavigator } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import { SpeakerContainer } from "../screens/Speaker";

const RootStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    Speaker: SpeakerContainer
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
export default RootStack;

import { createStackNavigator } from 'react-navigation';
import { AboutContainer } from '../screens/About';

const RootStack = createStackNavigator({
    About: AboutContainer
});
export default RootStack;

import { createStackNavigator } from 'react-navigation';
import NavigationLayout from './NavigationLayout';

const RootStack = createStackNavigator(
    {
        Layout: NavigationLayout
    },
);
export default RootStack;

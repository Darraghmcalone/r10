import { createStackNavigator } from 'react-navigation';
import NavigationLayout from './Nav';

const RootStack = createStackNavigator(
    {
        Layout: NavigationLayout,
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
export default RootStack

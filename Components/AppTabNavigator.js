import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonorScreen from '../Screens/Donor';
import DonateScreen from '../Screens/Donate';

export const AppTabNavigator = createBottomTabNavigator({
    Donors: {
        screen: DonorScreen,
    },
    Donate: {
        screen: DonateScreen,
    },
})
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoryScreen from '../screen/CategoryScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailsScreen from '../screen/MealDetailsScreen';
import Colors from '../constants/colors';
import { Platform } from 'react-native';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoryScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.header : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.header
    }
});

export default createAppContainer(MealsNavigator);
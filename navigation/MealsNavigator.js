import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoryScreen from '../screen/CategoryScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailsScreen from '../screen/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoryScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
});

export default createAppContainer(MealsNavigator);
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoryScreen from '../screen/CategoryScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailsScreen from '../screen/MealDetailsScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import FilterScreen from '../screen/FilterScreen';
import Colors from '../constants/colors';
import { Platform, Text } from 'react-native';

const defaultConfig = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
    Categories: CategoryScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultConfig
});

const FavouritesNavigator = createStackNavigator({
    Favourites: FavouriteScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultConfig
});

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, {
    navigationOptions:{
        drawerLabel: 'Filter Meals' 
    },
    defaultNavigationOptions: defaultConfig
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Ionicons 
                    name='ios-restaurant' 
                    size={25} 
                    color={tabInfo.tintColor} 
                />
            ),
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? 
                <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
        }
    },
    Favourites: {
        screen: FavouritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Ionicons 
                    name='ios-star' 
                    size={25} 
                    color={tabInfo.tintColor} 
                />
            ),
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? 
                <Text style={{fontFamily: 'open-sans-bold'}}>Favourites</Text> : 'Favourites'
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
    }) 
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accentColor
        }
    });

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, { 
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
            fontWeight: undefined
        },
        itemsContainerStyle: {
            marginTop: '20%'
        }
    }
})

export default createAppContainer(MainNavigator);
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailsScreen = props => {
    const mId = props.navigation.getParam('mealId');
    
    const displayMealDetails = MEALS.find(meal => meal.id === mId);

    return (
        <View>
            <Text>{displayMealDetails.title}</Text>
        </View>
    );
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mId = navigationData.navigation.getParam('mealId');
    const displayMealDetails = MEALS.find(meal => meal.id === mId);
    return {
        headerTitle: displayMealDetails.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Favourite' 
                    iconName='ios-star' 
                    onPress={() => console.log('Marked as Favourite!')} 
                />
            </HeaderButtons>
            )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default MealDetailsScreen;
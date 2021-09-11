import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <React.Fragment>
            {
                displayedMeals.length 
                ? <MealList
                    listData={displayedMeals}
                    navigation={props.navigation}
                /> 
                : <View style={styles.content}>
                    <DefaultText>Sorry, no meals found! Maybe check your filters?</DefaultText>
                </View>
                
            }
       </React.Fragment>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default CategoryMealsScreen;
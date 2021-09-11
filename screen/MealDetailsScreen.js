import React, { useCallback, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';
import { toggleFavorite } from '../store/actions/mealAction';

const MealDetailsScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mId = props.navigation.getParam('mealId');
    const favouriteMeals = useSelector(state => state.meals.favoriteMeals.some(
        meal => meal.id === mId
    ));
    const dispatch = useDispatch();
    
    const displayMealDetails = availableMeals.find(meal => meal.id === mId);

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mId));
    }, [dispatch, mId]);

    useEffect(() => {
    // props.navigation.setParams({ mealTitle: displayMealDetails.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: favouriteMeals })
    }, [favouriteMeals]);

    return (
        <ScrollView>
            <Image source={{uri: displayMealDetails.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{displayMealDetails.duration}m</DefaultText>
                <DefaultText>{displayMealDetails.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{displayMealDetails.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.titleText}>Ingredients:</Text>
            {displayMealDetails.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.titleText}>Steps:</Text>
            {displayMealDetails.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
}

MealDetailsScreen.navigationOptions = navigationData => {
    // const mId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavourite = navigationData.navigation.getParam('isFav');
    // const displayMealDetails = mealTitle.find(meal => meal.id === mId);
    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Favourite' 
                    iconName={isFavourite ? 'ios-star' : 'ios-star-outline'} 
                    onPress={toggleFavorite} 
                />
            </HeaderButtons>
            )
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    titleText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center'
    }
})
 
export default MealDetailsScreen;
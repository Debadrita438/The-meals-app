import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';

const MealDetailsScreen = props => {
    const mId = props.navigation.getParam('mealId');
    
    const displayMealDetails = MEALS.find(meal => meal.id === mId);

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
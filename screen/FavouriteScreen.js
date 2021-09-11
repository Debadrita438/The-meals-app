import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavouriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <React.Fragment>
        {
            favMeals.length 
            ? <MealList listData={favMeals} navigation={props.navigation} />
            : <View style={styles.content}>
                <DefaultText>No favourite meals found, start by adding some!</DefaultText>
            </View>
        }
        </React.Fragment>
    );
}

FavouriteScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favourites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Filter Meals'
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default FavouriteScreen;
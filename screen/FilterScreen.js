import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FilterSwitch from '../components/FilterSwitch';
import { setFilters } from '../store/actions/mealAction'; 

import CustomHeaderButton from '../components/HeaderButton';

const FilterScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            gluteenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                title='Gluten-free'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)} 
            />
            <FilterSwitch 
                title='Lactose-free'
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)} 
            />
            <FilterSwitch 
                title='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)} 
            />
            <FilterSwitch 
                title='Vegetarian'
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)} 
            />
        </View>
    );
}

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Save'
                    iconName='ios-save'
                    onPress={() => {
                        navData.navigation.getParam('save')()
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        margin: 20,
        textAlign: 'center'
    }
})
 
export default FilterScreen;
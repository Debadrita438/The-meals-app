import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The category meals screen</Text>
            <Button title='Go to Meals Details!' onPress={() =>{
                props.navigation.navigate('MealDetails')
            }} />
            <Button title='Go Back' onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default CategoryMealsScreen;
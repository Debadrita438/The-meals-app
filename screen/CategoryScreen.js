import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoryScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The categories screen</Text>
            <Button title='Go to Meals!' onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals'})
                // props.navigation.replace('CategoryMeals');
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
 
export default CategoryScreen;
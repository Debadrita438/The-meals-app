import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The meal details screen</Text>
            <Button title='Go to Categories' onPress={() => {
                props.navigation.popToTop();
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
 
export default MealDetailsScreen;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouriteScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The favourite recipe screen</Text>
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
 
export default FavouriteScreen;
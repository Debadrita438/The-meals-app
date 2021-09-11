import React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const MealItem = props => {
    let MealComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        MealComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.mealItem}>
            <MealComponent onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles. mealStyles, ...styles.mealTitle }}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles. mealStyles, ...styles.mealDetails }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </MealComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealStyles: {
        flexDirection: 'row'
    },
    mealTitle: {
        height: '85%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})
 
export default MealItem;
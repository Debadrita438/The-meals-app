import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const CategoryGridTile = props => {
    let GridComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        GridComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItems}>
            <GridComponent onPress={props.onSelect} style={{ flex: 1 }} activeOpacity={0.4}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
                </View>
            </GridComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 
            ? 'hidden' 
            : 'visible',
        elevation: 10
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.26,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})
 
export default CategoryGridTile;
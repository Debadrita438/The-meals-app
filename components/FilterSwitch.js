import React from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';

import Colors from '../constants/colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.title}</Text>
            <Switch 
                trackColor={{ true: Colors.accentColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state} 
                onValueChange={props.onChange} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
})
 
export default FilterSwitch;
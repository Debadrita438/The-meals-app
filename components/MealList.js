import React from 'react';
import { View,FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
    const renderMealItem = itemData => {
        return(
          <MealItem 
            title={itemData.item.title}
            duration={itemData.item.duration} 
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() =>{
                navigation.navigate({
                    routeName: 'MealDetails',
                    params: {
                        mealId: itemData.item.id
                    }
                })
            }}
        />  
        );
    }
    
    return (
        <View style={styles.list}>
            <FlatList 
                data={listData} 
                renderItem={renderMealItem} 
                style={{width: '90%'}} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default MealList;
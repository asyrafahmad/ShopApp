import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = props => {

    const renderMealItem = itemData => {
        return(
            <View><Text>{itemData.item.title}</Text></View>
        )
    }

    const catId = props.navigation.getParam('categoryId');

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);       // success >= 0,1 / failed <= -1,

    return(
        <View style={styles.screen}>
{/* 
            <Text>The Categories Meal Screensss!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to  Meals"  onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Button title="Go Back"  onPress={() => {
                props.navigation.goBack();
            }} />
             */}
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    );
};

CategoryMealScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    styles:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
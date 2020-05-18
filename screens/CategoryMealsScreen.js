import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return(
        <View style={styles.screen}>
            <Text>The Categories Meal Screensss!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to  Meals"  onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Button title="Go Back"  onPress={() => {
                props.navigation.goBack();
            }} />
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
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

    

    const catId = props.navigation.getParam('categoryId');

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0                            // success >= 0,1 / failed <= -1,
    );       

    return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};



export default CategoryMealScreen;
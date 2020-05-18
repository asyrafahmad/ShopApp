import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

    const renderGridItem = itemData  => {
        return <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({ 
                    routeName: 'CategoryMeals', 
                    params:  {  
                        categoryId: itemData.item.id
                    }
                });
            }}
        />;
    };

     //console.log(props);

    return(
            <FlatList 
                keyExtractor={(item, index) => item.id} 
                data={CATEGORIES} 
                renderItem={renderGridItem} 
                numColumns={2} 
            />
        
    );
};


CategoriesScreen.navigationOptions = {
    headerTitle: 'MealCategories'
};

const styles = StyleSheet.create({
    styles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});

export default CategoriesScreen;
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
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


CategoriesScreen.navigationOptions = (navData) => {

    return {
        headerTitle: 'MealCategories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu" 
                    iconNam='ios-menu' 
                    onPress={() => {navData.navigation.toggleDrawer()}}                 // openDrawer OR toggleDrawer
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    styles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});

export default CategoriesScreen;
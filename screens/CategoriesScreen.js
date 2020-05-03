import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = props => {

    const renderGridItem = itemData  => {
        return (
            <TouchableOpacity 
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeals'});
            }}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
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
    headerTitle: 'MealCategories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    styles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;
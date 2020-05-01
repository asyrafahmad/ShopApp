import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Categories Meal Screensss!</Text>
            <Button title="Go to  Meals"  onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Button title="Go Back"  onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    styles:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;
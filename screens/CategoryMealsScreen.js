import React from 'react';
import { View, Text } from 'react-native';

const CategoriesMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Categories Meal Screen!</Text>
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

export default CategoriesMealsScreen;
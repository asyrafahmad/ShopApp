import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const FavoritesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Categories Meal Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        styles:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },{
        tabBarOptions :{
            activeTintColor: Colors.accentColor,
        }
    }
);

export default FavoritesScreen;
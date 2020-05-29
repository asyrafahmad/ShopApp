import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A screen'
}

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen
    }, 
    { 
        defaultNavigationOptions : defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
},
{ 
    defaultNavigationOptions : defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: { 
        screen: MealsNavigator, 
        navigationOptions : {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name="ios-restaurant"  
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                );
            },
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals',
            tabBarColor: Colors.primaryColor,
        },
    },
    Favorites: { 
        screen: FavNavigator , 
        navigationOptions : {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name="ios-star"  
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                );
            },
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites',
            tabBarColor: Colors.accentColor 
        },
    }

};

const MealsFavTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true,                                                     // to shift the bottom navigator with options name
            barStyle: {                                                         // to change the default bottom navigator background color 
                backgroundColor: Colors.primaryColor
            }
        })  
        : createBottomTabNavigator(tabScreenConfig,{
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans'
                },
                activeTintColor: Colors.accentColor
            }
        });

const FiltersNavigator = createStackNavigator ({
    Filters: FiltersScreen
},
{ 
    // navigationOptions: {
    //     drawerLabel: 'Filters!!!'
    // },
    defaultNavigationOptions : defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator ({
    MealsFavs : {
        screen: MealsFavTabNavigator, 
        navigationOptions: {
            drawerLabel : 'Meals'
        }
    },
    Filters : FiltersNavigator
},
{
    contentOptions : {
        activeTintColor: Colors.accentColor,
        labelStyle : {
            fontFamily: 'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigator);
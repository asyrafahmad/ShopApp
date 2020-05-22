import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
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
            tabBarLabel: 'Meals',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-restaurant'  
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                );
            }
        },
        tabBarColor: Colors.primaryColor
    },
    Favorites: { 
        screen: FavNavigator , 
        navigationOptions : {
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-star'  size={25} color={tabInfo.tintColor} />
                );
            }
            
        },
        tabBarColor: Colors.accentColor 
    }

}

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
                activeTintColor: Colors.accentColor
            }
        });

const FilterNavigation = createStackNavigator ({
    Filters: FiltersScreen
})

const MainNavigator = createDrawerNavigator ({
    MealsFavs : MealsFavTabNavigator,
    Filters : FilterNavigation
});


export default createAppContainer(MainNavigator);
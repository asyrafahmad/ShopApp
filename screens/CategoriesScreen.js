import React from 'react';
import { View, Text } from 'react-native';

const CategoriesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
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

export default CategoriesScreen;
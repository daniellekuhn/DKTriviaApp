import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Category = props => {
    let historySelect = "true";
    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> props.onCategorySelection(historySelect)} >
                <Text>History</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
        alignItems: 'center'
    }, 
    buttonContainer: {
        marginTop: 100,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
    }
})

export default Category;


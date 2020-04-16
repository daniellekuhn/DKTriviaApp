import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Category = props => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> props.onCategorySelection()} >
                <Text style={styles.categoryText}>Geography</Text>
                <Image style={styles.image} source={{uri:'https://i.dlpng.com/static/png/6429774_preview.png'}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'mintcream',
        padding: 10,
        alignItems: 'center'
    }, 
    buttonContainer: {
        marginTop: 100,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        paddingHorizontal: 40,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 6,
        shadowOpacity: .26,
    },
    image: {
        width: 70,
        height: 70,
    },
    categoryText: {
        fontWeight: 'bold',
        color: 'midnightblue',
        fontSize: 18
    }
})

export default Category;


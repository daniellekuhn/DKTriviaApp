import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Category = props => {
    const geographySelected = "Geography";
    const computersSelected = "Computers";

    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> props.onCategorySelection(geographySelected)} >
                <Text style={styles.categoryText}>Geography</Text>
                <Image style={styles.image} source={{uri:'https://lh3.googleusercontent.com/proxy/q9--T4IUPxliudHG4nFVjVvu2eN1JOIiX_R0cHl2aZ_y8s20PAaeO-GwdfsYoWcRQ40lMFF_B2axTn2RJRm6Xu0GLSdSrpomDS02vA'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2} onPress={()=> props.onCategorySelection(computersSelected)} >
                <Text style={styles.categoryText}>Computers</Text>
                <Image style={styles.image} source={{uri:'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
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
    buttonContainer2: {
        marginTop: 30,
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
    },
    
})

export default Category;


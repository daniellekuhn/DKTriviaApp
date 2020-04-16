import React from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity, Image } from 'react-native';

const StartGameScreen = props => {
    // let startGameBoolean = "true";
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Welcome to Trivia!</Text>
            <Image style={styles.smudge} source={{uri:"https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/12/ginger-cat-lazing.png?fit=616%2C650"}}/>
            <TouchableOpacity style={styles.button} onPress={() => props.onStartGame()}>
                <Text style={styles.buttonFont}>New Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'mintcream',
        padding: 10,
        alignItems: 'center',
    }, 
    title: {
        color: "midnightblue",
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 10,
    },
    button: {
        borderRadius: 15,
        backgroundColor: 'hotpink',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: .36,
    },
    buttonFont: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    smudge: {
        width: 200,
        height: 200,
    }
})

export default StartGameScreen;

// onPress={() => setOutputText('the text changed!')}
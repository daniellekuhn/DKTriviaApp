import React from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';

const StartGameScreen = props => {
    let startGameBoolean = "true";
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Welcome to Historian's Trivia!</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.onStartGame(startGameBoolean)}>
                <Text style={styles.buttonFont}>New Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'purple',
        padding: 10,
        alignItems: 'center',
    }, 
    title: {
        color: "white",
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 50,
    },
    // container: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingHorizontal: 15,
    // },
    button: {
        borderRadius: 25,
        backgroundColor: 'pink',
        padding: 10,
        width: 100,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: .36,
    },
    buttonFont: {
        color: 'black',
        fontWeight: 'bold',
    }
})

export default StartGameScreen;

// onPress={() => setOutputText('the text changed!')}
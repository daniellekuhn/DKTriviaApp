import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image, TextInput } from 'react-native';

const StartGameScreen = props => {
    // let startGameBoolean = "true";
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Welcome to Trivia!</Text>
            <Image style={styles.smudge} source={{uri:"https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/12/ginger-cat-lazing.png?fit=616%2C650"}}/>
            <Text>Enter player name here:</Text>
            <TextInput style={styles.inputBox} onChangeText={(text)=> props.inputUsername(text)}/>
            <TouchableOpacity style={styles.button} onPress={() => props.onStartGame()}>
                <Text style={styles.buttonFont}>Ready to Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scoreboard} onPress={() => props.onScoreboard()}>
                <Text style={styles.scoreboardText}>Scoreboard</Text>
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
    inputBox: {
        width: 50,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        height: 25,
        width: 150,
        marginBottom: 20,
        marginTop: 10,
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
        paddingVertical: 15,
        paddingHorizontal: 20,
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
    },
    scoreboard: {
        marginTop: 10,
        backgroundColor: 'midnightblue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: .36,
    },
    scoreboardText: {
        fontSize: 12,
        color: "white",
    }
})

export default StartGameScreen;

// onPress={() => setOutputText('the text changed!')}
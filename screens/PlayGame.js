import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PlayGame = props => {

    return (
        <View style={styles.screen}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionHeader}>Question 1</Text>
                <Text style={styles.question}>"Where is the world?"</Text>
                    <Button title="Mars" style={styles.answer}/>
                    <Button title="Jupiter" style={styles.answer}/>
                    <Button title="Lost" style={styles.answer}/>
                    <Button title="Silly Question" style={styles.answer}/>
            </View>
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
    questionContainer: {
        marginTop: 100,
        backgroundColor: 'white',
        padding: 20,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: .36,
        shadowColor: 'black'
    },
    questionHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32,
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 10,
        fontSize: 24,
    },
    answer: {
        paddingTop: 10,
    }
})

export default PlayGame;


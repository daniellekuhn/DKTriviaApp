import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import axios from 'axios';
import Category from './Category'

class PlayGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showQuestion: "false",
            question: "",
            correctAnswer: "",
            incorrectAnswer1: "",
            incorrectAnswer2: "",
            incorrectAnswer3: "",
            questionNumber: 0,
            correctScore: 0,
            incorrectScore: 0,
            randomPosition1: "",
            randomPosition2: "",
            randomPosition3: "",
            randomPosition4: "",
            disableAnswers: false,
        }
    }

    fetchQuestions(){
    // helper function to  randomize results
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
            
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
            
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            
            return array;
        }

        // randomize the questions being pulled from database
        let numberOfAnswers = [1,2,3,4]
        let randomAnswerOrder = shuffle(numberOfAnswers)
        this.setState({
            randomPosition1: randomAnswerOrder[0],
            randomPosition2: randomAnswerOrder[1],
            randomPosition3: randomAnswerOrder[2],
            randomPosition4: randomAnswerOrder[3],
            disableAnswers: false,
        })
        
        //pull questions and answers from the database
        const options = {
            url: `https://dk-trivia-app2.firebaseio.com/${this.props.randomQuestionsNumsArray[this.state.questionNumber]}.json`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }
        axios(options)
        .then(response => {
            this.setState({
                showQuestion: "true",
                question: response.data.question,
                questionNumber: this.state.questionNumber+1,
                correctAnswer: response.data.correctAnswer,
                incorrectAnswer1: response.data.incorrectAnswer1,
                incorrectAnswer2: response.data.incorrectAnswer2,
                incorrectAnswer3: response.data.incorrectAnswer3,
                correctOrIncorrect: "",
            })
        })
        .catch( error => {
            console.log(error)
        }) 
    }
    //return correct result if the correct answer is chosen
    correctAnswerSelected() {
        this.setState({
            correctOrIncorrect: "CORRECT",
            correctScore: this.state.correctScore+1,
            disableAnswers: true,
        })
    }
    //return incorrect result if the correct answer is chosen
    incorrectAnswerSelected() {
        this.setState({
            correctOrIncorrect: "INCORRECT",
            incorrectScore: this.state.incorrectScore+1,
            disableAnswers: true,
        })
    }

    render() {
        //show question number once you start the game
        let showQuestionTag = <Text style={styles.questionHeader}>Get Ready!</Text>
        if (this.state.showQuestion === "true") {
            showQuestionTag = <Text style={styles.questionHeader}>Question {this.state.questionNumber}</Text>
        }
        //randomize answers
        const tag1 = <Button color="midnightblue" disabled={this.state.disableAnswers ? true : false} title={this.state.correctAnswer} onPress={()=> this.correctAnswerSelected()} style={styles.answer}/>
        const tag2 = <Button color="midnightblue" disabled={this.state.disableAnswers ? true : false} title={this.state.incorrectAnswer1} onPress={()=> this.incorrectAnswerSelected()} style={styles.answer}/>
        const tag3 = <Button color="midnightblue" disabled={this.state.disableAnswers ? true : false} title={this.state.incorrectAnswer2} onPress={()=> this.incorrectAnswerSelected()} style={styles.answer}/>
        const tag4 = <Button color="midnightblue" disabled={this.state.disableAnswers ? true : false} title={this.state.incorrectAnswer3} onPress={()=> this.incorrectAnswerSelected()} style={styles.answer}/>
        const tagRandomOrderArray = [];
        tagRandomOrderArray.push(tag1)
        tagRandomOrderArray.push(tag2)
        tagRandomOrderArray.push(tag3)
        tagRandomOrderArray.push(tag4)
        const reactTag1 = tagRandomOrderArray[this.state.randomPosition1-1];
        const reactTag2 = tagRandomOrderArray[this.state.randomPosition2-1];
        const reactTag3 = tagRandomOrderArray[this.state.randomPosition3-1];
        const reactTag4 = tagRandomOrderArray[this.state.randomPosition4-1];

        //only render next question button when question is less than 10
        let nextQuestionTag = <Button color="white" title="Next Question" onPress={()=> this.fetchQuestions()}/>
        if (this.state.questionNumber === 10) {
            nextQuestionTag = <Button color="white" title="Start New Game!" onPress={()=> this.props.onStartNewGame()}/>
        }

        return(
            <View style={styles.screen}>
                <View style={styles.scoreContainer}>
                    <Text style={styles.scoreTitle}>Score</Text>
                    <Text style={styles.score}>Correct: {this.state.correctScore}</Text>
                    <Text style={styles.score}>Incorrect: {this.state.incorrectScore}</Text>
                </View>
            <View style={styles.questionContainer}>
                {showQuestionTag}
                <Text style={styles.question}>{this.state.question}</Text>
                    {reactTag1}
                    {reactTag2}
                    {reactTag3}
                    {reactTag4}
            </View>
            <View style={styles.bottomButtonContains}>
                {nextQuestionTag}
            </View>
            <Text style={styles.correctOrIncorrect}>{this.state.correctOrIncorrect}</Text>
            <Text style={styles.correctAnswerText}>{this.state.disableAnswers ? "Correct Answer: ": ""}
            <Text style={styles.correctAnswerText}>{this.state.disableAnswers ? this.state.correctAnswer : ""}</Text>
            </Text>
            <Image style={styles.image} source={{uri:'https://i.dlpng.com/static/png/6429774_preview.png'}}/>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'mintcream',
        padding: 10,
        alignItems: 'center'
    }, 
    scoreTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },  
    score: {
        fontSize: 12,
        color: 'white'
    },
    questionContainer: {
        marginTop: 50,
        backgroundColor: 'white',
        padding: 20,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: .36,
        shadowColor: 'black',
        borderRadius: 25
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
        fontSize: 18,
    },
    image: {
        width: 250,
        height: 250,
    },
    answer: {
        paddingTop: 10,
    },
    correctOrIncorrect: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
    }, 
    scoreContainer: {
        backgroundColor: 'hotpink',
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginTop: 15,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .26,
        shadowColor: 'black',
        borderRadius: 5
    },
    bottomButtonContains: {
        marginTop: 10,
        backgroundColor: "hotpink",
        borderRadius: 10,
    },
    correctAnswerText: {
        marginTop: 10,
    }
})

export default PlayGame;


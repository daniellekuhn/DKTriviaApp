import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import axios from 'axios';

class PlayGame extends Component {
    state = {
        showQuestion: "false",
        question: "",
        correctAnswer: "",
        incorrectAnswer1: "",
        incorrectAnswer2: "",
        incorrectAnswer3: "",
        questionNumber: 0,
        score: 0,
        randomPosition1: "",
        randomPosition2: "",
        randomPosition3: "",
        randomPosition4: "",
    }

    fetchQuestions(){
        //helper function to  randomize results
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
        //generate 10 random question id's for database get request
        let numberOfQuestions = []
        for (var i = 1; i <= 50; i++) {
            numberOfQuestions.push(i)
        }
        let randomQuestionOrder10 = shuffle(numberOfQuestions).splice(10)
        
        //randomize the questions being pulled from database
        let numberOfAnswers = [1,2,3,4]
        let randomAnswerOrder = shuffle(numberOfAnswers)
        this.setState({
            randomPosition1: randomAnswerOrder[0],
            randomPosition2: randomAnswerOrder[1],
            randomPosition3: randomAnswerOrder[2],
            randomPosition4: randomAnswerOrder[3]
        })
        const randomQuestion0to49 = Math.floor(Math.random()*50)
        //pull questions and answers from the database
        const options = {
            url: `https://dk-trivia-app2.firebaseio.com/${randomQuestionOrder10[this.state.questionNumber]}.json`,
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
            score: this.state.score+1
        })
    }
    //return incorrect result if the correct answer is chosen
    incorrectAnswerSelected() {
        this.setState({
            correctOrIncorrect: "INCORRECT",
        })
    }

    render() {
        //show question number once you start the game
        let showQuestionTag = <Text style={styles.questionHeader}>Get Ready!</Text>
        if (this.state.showQuestion === "true") {
            showQuestionTag = <Text style={styles.questionHeader}>Question {this.state.questionNumber}</Text>
        }
        
        //randomize answers
        const tag1 = <Button title={this.state.correctAnswer} onPress={()=> this.correctAnswerSelected()} style={styles.answer}/>
        const tag2 = <Button title={this.state.incorrectAnswer1} onPress={()=> this.incorrectAnswerSelected()} style={styles.answer}/>
        const tag3 = <Button title={this.state.incorrectAnswer2} onPress={()=> this.incorrectAnswerSelected()} style={styles.answer}/>
        const tag4 = <Button title={this.state.incorrectAnswer3} onPress={()=> this.incorrectAnswerSelected()} style={styles.answer}/>
        const tagRandomOrderArray = [];
        tagRandomOrderArray.push(tag1)
        tagRandomOrderArray.push(tag2)
        tagRandomOrderArray.push(tag3)
        tagRandomOrderArray.push(tag4)
        const reactTag1 = tagRandomOrderArray[this.state.randomPosition1-1];
        const reactTag2 = tagRandomOrderArray[this.state.randomPosition2-1];
        const reactTag3 = tagRandomOrderArray[this.state.randomPosition3-1];
        const reactTag4 = tagRandomOrderArray[this.state.randomPosition4-1];

        return(
            <View style={styles.screen}>
                <View style={styles.scoreContainer}>
                    <Text style={styles.score}>Score: {this.state.score} out of {this.state.questionNumber}</Text>
                </View>
            <View style={styles.questionContainer}>
                {showQuestionTag}
                <Text style={styles.question}>{this.state.question}</Text>
                    {reactTag1}
                    {reactTag2}
                    {reactTag3}
                    {reactTag4}
            </View>
            <Button title="Next Question" onPress={()=> this.fetchQuestions()}/>
            <Text style={styles.correctOrIncorrect}>{this.state.correctOrIncorrect}</Text>
            <Image style={styles.image} source={{uri:'http://www.pngall.com/wp-content/uploads/2016/06/Globe-PNG.png'}}/>
        </View>
        )
    }
}

// const PlayGame = props => {
//     return (
//         <View style={styles.screen}>
//             <Button title="start game" onPress={()=> fetchQuestions()}/>
//             <View style={styles.questionContainer}>
//                 <Text style={styles.questionHeader}>Question 1</Text>
//                 <Text style={styles.question}>"Where is the world?"</Text>
//                     <Button title="test" style={styles.answer}/>
//                     <Button title="Jupiter" style={styles.answer}/>
//                     <Button title="Lost" style={styles.answer}/>
//                     <Button title="Silly Question" style={styles.answer}/>
//             </View>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'mintcream',
        padding: 10,
        alignItems: 'center'
    }, 
    score: {
        fontSize: 18,
        color: 'black'
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
        padding: 10,
        marginTop: 15,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .26,
        shadowColor: 'black',
        borderRadius: 5
    }
})

export default PlayGame;


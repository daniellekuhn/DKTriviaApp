import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen';
import Category from './screens/Category';
import PlayGame from './screens/PlayGame'

class App extends Component {
  constructor() {
    super()
    this.state = {
      startGame: "false",
      geographySelect: "false",
      startNewGame: "false",
      randomQuestionsNumsArray: []
    }
  }

  startGameHandler(){
    this.setState({
      startGame: "true",
      startNewGame: "false"
    })
  }
  selectCategoryHandler(){
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
    for (var i = 1; i < 50; i++) {
        numberOfQuestions.push(i)
    }
    let randomQuestionOrder10 = shuffle(numberOfQuestions).splice(20)

  this.setState({
    startGame: "false",
    selectCategory: "true",
    randomQuestionsNumsArray: randomQuestionOrder10,
  })
  }

  startNewGame(){
    this.setState({
      selectCategory: "false",
      startNewGame: "true",
    })
  }
  
  render() {
    let content = <StartGameScreen onStartGame={this.startGameHandler.bind(this)}/>;
    
    if (this.state.startGame === "true") {
      content = <Category onCategorySelection={this.selectCategoryHandler.bind(this)}/>
    } 
    if (this.state.selectCategory === "true") {
      content = <PlayGame onStartNewGame={this.startNewGame.bind(this)} randomQuestionsNumsArray={this.state.randomQuestionsNumsArray}/>
    }
    if (this.state.startNewGame === "true") {
      content = <StartGameScreen onStartGame={this.startGameHandler.bind(this)}/>;
    }

  return (
    <View style={styles.container}>
      <Header/>
      {content}
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
  
// const [userStartedGame, startGame] = useState();
//   const [userSelectCategory, selectCategory] =useState();
//   const [userSelectsNewGame, newGame] = useState();

//   const startGameHandler = (startGameBoolean) => {
//     startGame(startGameBoolean)
//   }
//   const selectCategoryHandler = (historySelect) => {
//     selectCategory(historySelect)
//   }
//   const startNewGameHandler = (newGameBoolean) => {
//     newGame(newGameBoolean)
//   }

//   let content = <StartGameScreen onStartGame={startGameHandler} />;
  
//   if (userStartedGame && !userSelectCategory && !userSelectsNewGame) {
//     content = <Category onStartGame={startGameHandler} onCategorySelection={selectCategoryHandler}/>
//   } 

//   if (userStartedGame && userSelectCategory && !userSelectsNewGame) {
//     content = <PlayGame onNewGameSelection={startNewGameHandler}/>
//   }

//   if (userStartedGame && userSelectCategory && userSelectsNewGame) {
//     content = <StartGameScreen onStartGame={startGameHandler} />
//   }
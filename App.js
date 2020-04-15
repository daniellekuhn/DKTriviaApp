import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen';
import Category from './screens/Category';
import PlayGame from './screens/PlayGame'

export default function App() {
  //show the category screen
  const [userStartedGame, startGame] = useState();
  const [userSelectCategory, selectCategory] =useState();

  const startGameHandler = (startGameBoolean) => {
    startGame(startGameBoolean)
  }
  const selectCategoryHandler = (historySelect) => {
    selectCategory(historySelect)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  
  if (userStartedGame && !userSelectCategory) {
    content = <Category onStartGame={startGameHandler} onCategorySelection={selectCategoryHandler}/>
  } 

  if (userStartedGame && userSelectCategory) {
    content = <PlayGame onCategorySelection={selectCategoryHandler}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Trivia Champions"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 36,
    // alignItems: 'top',
    // flexDirection: 'row',
    // backgroundColor: 'pink',    
  }
  // newGame: {
  //   color: 'blanchedalmond',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  // },
  // button: {
  //   alignItems: "center",
  //   backgroundColor: 'white',
  //   padding: 20,
  //   borderRadius: 25,
  // }
});
  

// const [outputText, setOutputText] = useState('Open up App.js to start working on your app');

      {/* <Text style={styles.newGame}>{outputText}</Text> */}

      {/* <Text style={styles.newGame}>Welcome to Trivia!</Text>*/}

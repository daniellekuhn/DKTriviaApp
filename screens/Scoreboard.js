import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Name', 'Category', 'Score'],
          tableData: []
        }
      }
    
    componentDidMount(){
        const options = {
            url: `https://dk-trivia-game.firebaseio.com/scores.json`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }
        axios(options)
        .then(response => {
            for (var i = 0; i < Object.keys(response.data).length; i++) {
                let postedName = Object.keys(response.data)[i];
                let element = response.data[postedName]
                let scoreArray = [];
                scoreArray.push(element.username);
                scoreArray.push(element.category);
                scoreArray.push(element.score);
                this.setState({
                    tableData: [...this.state.tableData,scoreArray]
                })
            }
        })
        .catch( error => {
            console.log(error)
        }) 

        const options2 = {
            url: `https://dk-trivia-app2.firebaseio.com//scores.json`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }
        axios(options2)
        .then(response => {
            for (var i = 0; i < Object.keys(response.data).length; i++) {
                let postedName = Object.keys(response.data)[i];
                let element = response.data[postedName]
                let scoreArray = [];
                scoreArray.push(element.username);
                scoreArray.push(element.category);
                scoreArray.push(element.score);
                this.setState({
                    tableData: [...this.state.tableData,scoreArray]
                })
            }
        })
        .catch( error => {
            console.log(error)
        }) 
    }

    render() {
        return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
            <   Rows data={this.state.tableData} textStyle={styles.text}/>
            </Table>
        <TouchableOpacity>
            <Text style={styles.backHome} onPress={()=> this.props.onStartNewGame()}>Back to New Game</Text>
        </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    backHome: {
        marginTop:10,
        color: 'midnightblue',
        textDecorationLine: "underline",
        fontSize: 10,
    }
});
// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         backgroundColor: 'mintcream',
//         padding: 10,
//         alignItems: 'center'
//     }, 
//     scoreboardContainer: {
//         marginTop: 50,
//         backgroundColor: 'white',
//         padding: 100,
//         shadowOffset: {width: 0, height: 2},
//         shadowRadius: 6,
//         shadowOpacity: .36,
//         shadowColor: 'black',
//         borderRadius: 20,
//     },
// })

export default Scoreboard;



import React, { Component } from "react";
import Header from './Header';
import Player from './Player';
import NewPlayer from "./newPlayer";
import './App.css';


interface Players {
  id: number, 
  name: string,
  score: number
}

interface State {
  players: Players[]
}

class App extends Component <Players, State> {

  state = {
    players: [
      {id: 1, name: "Bosse", score: 15},
      {id: 2, name: "Vera", score: 3},
      {id: 3, name: "Pelle", score: 10},
      {id: 4, name: "Anna", score: 0}
    ]
  }
   
  updateScore = (newScore:number[]) => {

    const newState = this.state.players;
    newState[newState.findIndex((player) => player.id === newScore[1])].score = newScore[0]

    this.setState({
      players: newState
    });
  
  };

  saveNewPlayer = (newPlayer: Players):void => {
    const newPlayerList = this.state.players;
    newPlayerList.push(newPlayer);
    this.setState({players: newPlayerList});
  };

  render() {

    const playerList:Players[] = this.state.players;
    playerList.sort((a, b) => b.score - a.score);

    return (
      <div className="App">
        <Header />
        <main>
          <NewPlayer players={this.state.players} saveNewPlayer={this.saveNewPlayer}/>
          <section>
            {playerList.map((item, i) => 
              <Player 
                key={i} 
                id={playerList[i].id} 
                name={playerList[i].name} 
                score={this.state.players[i].score} 
                updateScore={this.updateScore} />
            )} 
          </section>
 
        </main>

      </div>
    );

  } 
}

export default App;

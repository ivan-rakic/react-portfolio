import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  render() {
    console.log('this', this);
    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occured.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }

    return (
      <div>
        <h2>♠ ♢ Evens or Odds ♥ ♧</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The Game is ON</h3>
            <GameState />
            <br />
            <Guess />
            <br />
            <DrawCard />
            <hr />
            <Card />
            <hr />
            <button onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
            <div>
              <h3>A new game awaits</h3>
              <br />
              <button onClick={this.startGame}>Start Game</button>
              <hr />
              <Instructions />
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);

  // const { gameStarted } = state.settings;
  // const { fetchState, message } = state.deck;
  // ili ako se uradi destructuring, onda ovako ispod
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message };

  // ili moze ovako da se napise u duzoj varijanti
  // return {
  //   gameStarted: state.gameStarted,
  //   fetchState: state.fetchState,
  //   message: state.message
  // }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck())
//   };
// }
// alternativa je da se kao drugi parametar u componentConctoru stave dispatch prosi, ali onda mora da se implementuje dodatnikurac

const componentConnector = connect(mapStateToProps, { startGame, cancelGame, fetchNewDeck });

export default componentConnector(App);

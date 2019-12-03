import React, { Component } from 'react';
import End from './End';
import Card from './components/Card';
import Settings from './Settings';

import './App.css';

const pexesoState = {WFTFC: "WAITING_FOR_THE_FIRST_CARD",
  WFTSC: "WAITING_FOR_THE_SECOND_CARD",
  WRONG:"WRONG",
  FINISH: "FINISH"};

var count_of_flips = 0;
var correct_pair = 0;
var all_pair = 0;
var score = 0;

//tato funkcia je z:... Pouzžívam ju na náhodné rozhodenie obrázkov.
function randomizeArray(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

//táto funkcia je tiež z: ... Vytváram pomocou nej pexeso board
function createArray(x, y){
  return Array.apply(null, Array(x)).map(function(e){
    return Array(y);
  });
}

class App extends Component {
  constructor(props){
    super(props);

    if(props.width * props.height % 2 === 1) {
      alert("You have odd number of cards, you can not play pexeso");
    }

    var board_of_cards = createArray(props.height, props.width);
    var images = [];

    all_pair = (props.height*props.width)/2;

    for(var oneDIndex = 0; oneDIndex < props.height*props.width; oneDIndex++){
      images.push(Math.floor(oneDIndex/2)+1);
    }
    randomizeArray(images);

      for(var number_of_row=0; number_of_row < props.height; number_of_row++){
        for(var number_of_col=0; number_of_col < props.width; number_of_col++){
          board_of_cards[number_of_row][number_of_col] = {
            cardValue:images[number_of_row * props.width + number_of_col],
            flipped:false,
            rowIndex:number_of_row,
            collumnIndex:number_of_col};
        }
      }

      this.state={
        cards: board_of_cards,
        gameStates: pexesoState.WFTFC,
        firstCard: null,
        secondCard: null};

  }

cardClick(card) {
    count_of_flips++;
  if(!card.flipped){

    switch (this.state.gameStates) {

      case pexesoState.WFTFC:
        this.state.cards[card.rowIndex][card.collumnIndex].flipped = true;
        this.setState({cards : this.state.cards, firstCard: card, gameStates: pexesoState.WFTSC});
        break;

      case pexesoState.WFTSC:
        this.state.cards[card.rowIndex][card.collumnIndex].flipped = true;
        if(this.state.firstCard.cardValue === card.cardValue){
          correct_pair++;
          score = score + 50;
          if (correct_pair === all_pair){
            console.log("You are on finish");
            this.setState({gameStates: pexesoState.FINISH, cards: this.state.cards});
          }else {
            this.setState({gameStates: pexesoState.WFTFC, cards: this.state.cards});
          }
        }else{
          this.setState({gameStates: pexesoState.WRONG, cards: this.state.cards, secondCard: card});
        }
        break;

      case pexesoState.WRONG:
        score = score - 25;
        this.state.cards[this.state.firstCard.rowIndex][this.state.firstCard.collumnIndex].flipped = false;
        this.state.cards[this.state.secondCard.rowIndex][this.state.secondCard.collumnIndex].flipped = false;
        this.state.cards[card.rowIndex][card.collumnIndex].flipped = true;
        this.setState({gameStates: pexesoState.WFTSC, cards: this.state.cards, firstCard: card});
        break;

      default:
        alert("Wrong state\n");
        break;
    }
  }
}
  render(){
    const cardsRendered = this.state.cards.map((rowOfCards, rowIndex) =><tr>{ rowOfCards.map((card, indexOfCardInRow) =><td onClick={ ()=>this.cardClick(card)}><Card card={ card }/></td>)}</tr>);
    return (
        <div className="App">
          <div className="Info_container">
            <div className="Title">
              PEXESO
            </div>
            <div>
              <button className="button">
                <a className="click" href="Settings">SETTINGS</a>
              </button>
            </div>
            <div className="gameState">
              STATE : { this.state.gameStates === "FINISH" ? <End/> : this.state.gameStates }
            </div>
          </div>
          <div className="gameBoard">
            <table>
              <tbody>
              { cardsRendered }
              </tbody>
            </table>
          </div>
          <ul className="Info">
            <li>FLIPS:{count_of_flips}</li>
            <li>YOU HAVE {correct_pair} PAIR FROM {all_pair}</li>
            <li>YOUR SCORE IS : {score}</li>
          </ul>
        </div>);
  }
}

export default App;

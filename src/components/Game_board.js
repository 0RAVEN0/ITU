import React, { Component } from 'react';
import '../App.css';
import Card from "./Card";
import End from "./End";

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

class Game_board extends Component {
    constructor(props){
        super(props);

        if(4 * 4 % 2 === 1) {
            alert("You have odd number of cards, you can not play pexeso");
        }

        var board_of_cards = createArray(4, 4);
        var images = [];

        all_pair = (4*4)/2;

        for(var oneDIndex = 0; oneDIndex < 4*4; oneDIndex++){
            images.push(Math.floor(oneDIndex/2)+1);
        }
        randomizeArray(images);

        for(var number_of_row=0; number_of_row < 4; number_of_row++){
            for(var number_of_col=0; number_of_col < 4; number_of_col++){
                board_of_cards[number_of_row][number_of_col] = {
                    cardValue:images[number_of_row * 4 + number_of_col],
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

    render() {
        const cardsRendered = this.state.cards.map((rowOfCards, rowIndex) =>
            <tr>{rowOfCards.map((card, indexOfCardInRow) => <td onClick={() => this.cardClick(card)}><Card card={card}/>
            </td>)}</tr>);
        return (
            <div className="App">
                <div className="gameState">
                    { this.state.gameStates === "FINISH" ? <End/> : this.state.gameStates }
                    <ul className="Info">
                        <li>FLIPS:{count_of_flips}</li>
                        <li>YOU HAVE {correct_pair} PAIR FROM {all_pair}</li>
                        <li>YOUR SCORE IS : {score}</li>
                    </ul>
                </div>
                <div className="gameBoard">
                    <table>
                        <tbody>
                        { cardsRendered }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Game_board;
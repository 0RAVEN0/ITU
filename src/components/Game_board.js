/**
 * Vysoké Učení Technické v Brne
 * Fakulta Informačných Technologie
 * Predmet: ITU
 * Projekt: Pexeso
 * 
 * @author Romana Džubárová (xdzuba00)
 * @author Daniel Miloslav Očenáš (xocena06)
 * 
 * @description Application layer of the app
 */

import React, { Component } from 'react';
import '../style/App.css';
import Card from "./Card";
import End from "./End";
import { heightEnum, widthEnum } from "./Amount";
import { Click } from "./Player";

const pexesoState = {WFTFC: "WAITING_FOR_THE_FIRST_CARD",
    WFTSC: "WAITING_FOR_THE_SECOND_CARD",
    WRONG:"WRONG",
    FINISH: "FINISH"};

export const flips = {correct_pair: 0, all_pair: 0, score: 0, score2: 0, turns: 0}


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

        if(heightEnum.height * widthEnum.width % 2 === 1) {
            alert("You have odd number of cards, you can not play pexeso");
        }

        var board_of_cards = createArray(5, 4);
        var images = [];

        flips.all_pair = (heightEnum.height * widthEnum.width)/2;

        for(var oneDIndex = 0; oneDIndex < heightEnum.height * widthEnum.width; oneDIndex++){
            images.push(Math.floor(oneDIndex/2)+1);
        }
        randomizeArray(images);

        for(var number_of_row=0; number_of_row < heightEnum.height; number_of_row++){
            for(var number_of_col=0; number_of_col < widthEnum.width; number_of_col++){
                board_of_cards[number_of_row][number_of_col] = {
                    cardValue:images[number_of_row * widthEnum.width + number_of_col],
                    flipped:false,
                    rowIndex:number_of_row,
                    collumnIndex:number_of_col};
            }
        }

        this.state = {
            cards: board_of_cards,
            gameStates: pexesoState.WFTFC,
            firstCard: null,
            secondCard: null,
            combo:1,
            turns: 0,
            player: false
        };
    }

    shuffleCards(){
        var newPosition = this.state.cards;
        var temp = newPosition[0][1];

        newPosition[0][1].cardValue = newPosition[0][0].cardValue;
        newPosition[0][0].cardValue = temp.cardValue; 

        this.setState({
            cards : newPosition
        })

        // this.setState({
        //     cards: randomizeArray(this.state.cards)
        // })
        
    }

    cardClick(card) {

        if(!card.flipped){
            var inc = this.state.turns;
            switch (this.state.gameStates) {

                case pexesoState.WFTFC:
                    this.state.cards[card.rowIndex][card.collumnIndex].flipped = true;
                    
                    inc++;
                    this.setState({cards : this.state.cards, firstCard: card, gameStates: pexesoState.WFTSC, turns: inc});
                    break;

                case pexesoState.WFTSC:
                    this.state.cards[card.rowIndex][card.collumnIndex].flipped = true;
                    if(this.state.firstCard.cardValue === card.cardValue){
                        flips.correct_pair++;

                        // combo score bonus
                        var newCombo = this.state.combo;
                        newCombo++;
                        this.setState({
                            combo: newCombo
                        })

                        if (this.state.player === false && Click.click === 1){
                            flips.score = flips.score + 150 * this.state.combo;
                        }
                        else if (this.state.player === true && Click.click === 1){
                            flips.score2 = flips.score2 + 150 * this.state.combo;
                        }
                        else{
                            flips.score = flips.score + 150 * this.state.combo;
                        }

                        if (flips.correct_pair === flips.all_pair){
                            this.setState({gameStates: pexesoState.FINISH, cards: this.state.cards});
                        }else {
                            this.setState({gameStates: pexesoState.WFTFC, cards: this.state.cards});
                        }
                    }else{
                        this.setState({gameStates: pexesoState.WRONG, cards: this.state.cards, secondCard: card});
                    }
                    this.state.cards[card.rowIndex][card.collumnIndex].flipped = true;
                    break;

                case pexesoState.WRONG:
                    this.setState({
                        combo : 1
                    })
                    if (this.state.player === false && Click.click === 1){
                        flips.score = flips.score - 25;
                    }
                    else if (this.state.player === true && Click.click === 1){
                        flips.score2 = flips.score2 - 25;
                    }
                    else{
                        flips.score = flips.score - 25;
                    }

                    this.state.cards[this.state.firstCard.rowIndex][this.state.firstCard.collumnIndex].flipped = false;
                    this.state.cards[this.state.secondCard.rowIndex][this.state.secondCard.collumnIndex].flipped = false;
                    this.state.cards[card.rowIndex][card.collumnIndex].flipped = true;
                    
                    inc++;
                    this.setState({gameStates: pexesoState.WFTSC, cards: this.state.cards, firstCard: card, player: !this.state.player,turns:inc});
                    break;

                default:
                    alert("Wrong state\n");
                    break;
            }
        }
    }


    render() {
        const cardsRendered = this.state.cards.map((rowOfCards, rowIndex) =>
            <tr>{rowOfCards.map((card, indexOfCardInRow) => <td onClick={() => this.cardClick(card)}><Card card={card} author={this.props.author}/></td>)}</tr>);
        return (
            <div className={`App${this.props.author}`}>
                <div className="gameState">
                    { this.state.gameStates === "FINISH" ? <End /> : "" }
                    { Click.click === 1 ? (this.state.player ? <p className="second">2.player on turn</p> : <p className="first">1.player on turn</p>) : "" }
                    { Click.click === 1 ?
                        <ul className="Info">
                            <li>YOU HAVE |{flips.correct_pair}| PAIR FROM {flips.all_pair}</li>
                            <li>1.PLAYER SCORE IS : {flips.score}</li>
                            <li>2.PLAYER SCORE IS : {flips.score2}</li>
                        </ul>
                        :
                        <ul className="Info">
                            <li>YOU HAVE |{flips.correct_pair}| PAIR FROM {flips.all_pair}</li>
                    <li>YOUR SCORE IS : {flips.score} &emsp; TURNS : {this.state.turns}</li>
                        </ul>
                    }
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
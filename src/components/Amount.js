import React, { Component } from 'react';

import '../style/App.css';
import {flips} from "./Game_board";

export const heightEnum = {height: '4'};
export const widthEnum = {width: '4'};

class Amount extends Component{
    game_amount(state){
        switch (state) {

            case "12":
                heightEnum.height = '4';
                widthEnum.width = '3';
                break;

            case "16":
                heightEnum.height = '4';
                widthEnum.width = '4';
                break;

            case "20":
                heightEnum.height = '5';
                widthEnum.width = '4';
                break;

            default:
                alert("Wrong state\n");
                break;
        }
    }
    render(){
        flips.all_pair = 0;
        flips.correct_pair = 0;
        flips.score = 0;
        flips.score2 = 0;
        return  (
            <div className="gameState">
                Choose the number of cards you would like.
                <div className="gameBoard">
                    <table>
                        <tbody>
                        <tr>
                            <button className="button" onClick={() => this.game_amount("12")}>
                                <p>12 cards</p>
                            </button>
                        </tr>
                        <tr>
                            <button className="button" onClick={() => this.game_amount("16")}>
                                <p>16 cards</p>
                            </button>
                        </tr>
                        <tr>
                            <button className="button" onClick={() => this.game_amount("20")}>
                                <p>20 cards</p>
                            </button>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Amount;
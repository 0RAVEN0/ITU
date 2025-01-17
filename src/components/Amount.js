/**
 * Vysoké Učení Technické v Brne
 * Fakulta Informačných Technologie
 * Predmet: ITU
 * Projekt: Pexeso
 * 
 * @author Daniel Miloslav Očenáš (xocena06)
 * 
 * @description Enables user to change ammout of pairs to play with
 *              at the same time defines area for the card displaying
 */

import React, { Component } from 'react';

import '../style/App.css';
import {flips} from "./Game_board";
import {author} from "./Game_board";

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
                <div className="gameBoard">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <button className="button" onClick={() => this.game_amount("12")}>
                                { 
                                    author.name === 'xdzuba00' 
                                    ? <p>12 cards</p>
                                    : <p>12 KARET</p>
                                }
                                    
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="button" onClick={() => this.game_amount("16")}>
                                { 
                                    author.name === 'xdzuba00' 
                                    ? <p>16 cards</p>
                                    : <p>16 KARET</p>
                                }
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="button" onClick={() => this.game_amount("20")}>
                                { 
                                    author.name === 'xdzuba00' 
                                    ? <p>20 cards</p>
                                    : <p>20 KARET</p>
                                }
                                </button>  
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Amount;
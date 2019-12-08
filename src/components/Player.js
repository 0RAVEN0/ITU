/**
 * Vysoké Učení Technické v Brne
 * Fakulta Informačných Technologie
 * Predmet: ITU
 * Projekt: Pexeso
 * 
 * @author Romana Džubárová (xdzuba00)
 * 
 * @description gives user the option to chose ammount of players
 */

 import React, { Component } from 'react';

import '../style/App.css';
import {flips} from "./Game_board";

export const Click = {click: 0};

class Player extends Component{
    game_player(stats){
        if (stats === "one"){
            Click.click = 0;
        }

        if (stats === "two"){
            Click.click = 1;
        }
    }
    render(){
        flips.all_pair = 0;
        flips.correct_pair = 0;
        flips.score = 0;
        flips.score2 = 0;
        return (
            <div className="gameState">
                <div className="gameBoard">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <button className="button" onClick={ () => this.game_player("one") }>
                                    <p>1 players</p>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="button" onClick={ () => this.game_player("two")}>
                                    <p>2 players</p>
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

export default Player;
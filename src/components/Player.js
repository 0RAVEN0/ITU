import React, { Component } from 'react';

import '../style/App.css';

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
        return (
            <div className="gameState">
                <div className="gameBoard">
                    <table>
                        <tbody>
                        <tr>
                            <button className="button" onClick={ () => this.game_player("one") }>
                                <p>1 players</p>
                            </button>
                        </tr>
                        <tr>
                            <button className="button" onClick={ () => this.game_player("two")}>
                                <p>2 players</p>
                            </button>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Player;
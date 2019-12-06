import React, { Component } from 'react';

import '../style/App.css';
import {Click} from "./Player";
import {flips} from "./Game_board";


class End extends Component{
    render(){
        return (
            <div className="endGame">
                Congratulations, you successfully finished the game.
                { Click.click === 1 ? (flips.score >= flips.score2 ? <p className="first">Winner is 1. player and your score is { flips.score }</p> : <p className="second">Winner is 2. player and your score is { flips.score2 }</p>) : <p>And your score is { flips.score }</p> }

            </div>
        );
    }
}

export default End;
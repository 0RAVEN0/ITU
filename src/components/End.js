import React, { Component } from 'react';

import '../style/App.css';

class End extends Component{
    render(){
        return (
            <div className="endGame">
                Congratulations, you successfully finished the game.
            </div>
        );
    }
}

export default End;
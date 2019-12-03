import React, {Component} from "react";
import '../App.css';

var imageArray=["./img/caka.svg", "./img/lezi.svg", "./img/lubi.svg", "./img/odpociva.svg", "./img/skavou.svg", "./img/tesisa.svg", "./img/velmisatesi.svg", "./img/zaselubi.svg"]

class Card extends Component{
    render(){
        return  (
            <div className="card">
      <span>
        { this.props.card.flipped ? <img className="Card-front" src={ imageArray[this.props.card.cardValue - 1] } alt="Caka"/> : <img className="Card-back" src="./img/back.svg" alt="Logo"/> }
      </span>
            </div>
        );
    }
}

export default Card;
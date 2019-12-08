import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import { packState } from "./Packages";
import '../style/App.css';


var imageArray=[];
var cardBackImg='';

class Card extends Component{
    constructor(props) {
        super(props);

        if (packState.package === "FIRST"){
            imageArray=["./img/marad.svg","./img/snoopy.png","./img/caka.svg", "./img/lezi.svg", "./img/lubi.svg", "./img/odpociva.svg", "./img/skavou.svg", "./img/tesisa.svg", "./img/velmisatesi.svg", "./img/zaselubi.svg"];
        }

        if (packState.package === "SECOND"){
            imageArray=["./img2/frozen.jpg","./img2/frozen2.png","./img2/frozen3.png", "./img2/frozen4.png", "./img2/frozen5.png", "./img2/frozen6.png", "./img2/frozen7.png", "./img2/frozen8.png", "./img2/frozen9.png", "./img2/frozen10.png"]
        }

        if (packState.package === "THIRD"){
            imageArray=["./img3/cars.jpg","./img3/car2.jpg", "./img3/car4.jpg", "./img3/car6.png", "./img3/car7.jpg", "./img3/car8.jpg", "./img3/car9.jpg", "./img3/car10.jpg","./img3/car3.jpg", "./img3/car5.jpg"]
        }        
        
        if (packState.package === "KOSTOLY"){
            imageArray=[
                "./kostolyBrno/b_panny_marie.jpg",
                "./kostolyBrno/ch_sv_vaclava.jfif",
                "./kostolyBrno/chram_jak.jpg",
                "./kostolyBrno/k_jezuitsky.jpg",
                "./kostolyBrno/k_sv_jakuba.jpg",
                "./kostolyBrno/k_sv_krize.jpg",
                "./kostolyBrno/k_sv_michala_archandela.jpg",
                "./kostolyBrno/k_sv_tomas.jpg",
                "./kostolyBrno/kat_sv_petra_a_pavla.jpg",
                "./kostolyBrno/sbor_husov.jpg"
            ]
        }
    }

        render(){
            
            const author = this.props.author;
            if(author === 'xocena06'){
                cardBackImg = './logoBrno.jpg';
            }
            else if(author === 'xdzuba00'){
                cardBackImg = './img/back.svg';
            }

        return  (
            <div className="card">
                <ReactCardFlip isFlipped={this.props.card.flipped} flipDirection="horizontal">
                    <span>
                        <img className="Card-back" src={cardBackImg} alt="Logo"/>
                    </span>
                    <span>
                        <img className="Card-front" src={ imageArray[this.props.card.cardValue - 1] }/>
                    </span>
                </ReactCardFlip>

            </div>
        );
    }
}

export default Card;
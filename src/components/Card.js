/**
 * Vysoké Učení Technické v Brne
 * Fakulta Informačných Technologie
 * Predmet: ITU
 * Projekt: Pexeso
 * 
 * @author Romana Džubárová (xdzuba00)
 * @author Daniel Miloslav Očenáš (xocena06)
 * 
 * @description defines look of individual packages of the pexeso cards
 *              card is used as a external component imported from react-card-flip library
 */

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

        else if (packState.package === "SECOND"){
            imageArray=["./img2/frozen.svg","./img2/frozen2.svg","./img2/frozen3.svg", "./img2/frozen4.svg", "./img2/frozen5.svg", "./img2/frozen6.svg", "./img2/frozen7.svg", "./img2/frozen8.svg", "./img2/frozen9.svg", "./img2/frozen10.svg"]
        }

        else if (packState.package === "THIRD"){
            imageArray=["./img3/cars.svg","./img3/car2.svg", "./img3/car4.svg", "./img3/car6.svg", "./img3/car7.svg", "./img3/car8.svg", "./img3/car9.svg", "./img3/car10.svg","./img3/car3.svg", "./img3/car5.svg"]
        }        
        
        else if (packState.package === "KOSTOLY"){
            imageArray=[
                "./kostolyBrno/b_panny_marie.jpg",
                "./kostolyBrno/ch_sv_vaclava.jpg",
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
        else if (packState.package === "NAMESTIA"){
            imageArray=[
                "./namestiaBrno/dominikanske.jpg",
                "./namestiaBrno/jakubske.jpg",
                "./namestiaBrno/malinak.jpg",
                "./namestiaBrno/svobodak.jfif",
                "./namestiaBrno/zelnak.jpg",
                "./namestiaBrno/moravak.jpg",
                "./namestiaBrno/mendlak.jpg",
                "./namestiaBrno/silingrak.jpg",
                "./namestiaBrno/komenskeho.jpg",
                "./namestiaBrno/hlavas.jpg"
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
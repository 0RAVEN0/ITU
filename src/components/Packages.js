/**
 * Vysoké Učení Technické v Brne
 * Fakulta Informačných Technologie
 * Predmet: ITU
 * Projekt: Pexeso
 * 
 * @author Romana Džubárová (xdzuba00)
 * @author Daniel Miloslav Očenáš (xocena06)
 * 
 * @description defines packages that can be selected and changed as desired
 */

 import React, {Component} from "react";
import '../style/App.css';
import {flips} from "./Game_board";

export const packState = {package: 'KOSTOLY'};

class Packages extends Component{

    game_pack(state){
        switch (state) {

            case "F":
                packState.package = 'FIRST';
                break;

            case "S":
                packState.package = 'SECOND';
                break;

            case "T":
                packState.package = 'THIRD';
                break;

            case "K":
                packState.package = 'KOSTOLY';
            break;

            case "N":
                packState.package = 'NAMESTIA';
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
                                <td>SNOOPY DOG</td>
                                <td>
                                    <button className="button" onClick={() => this.game_pack("F")}>
                                        <img className="button_image" src="./img/snoopy.png" alt="Snoopy"/>
                                    </button>
                                </td>
                                
                                <td>KOSTOLY V BRNĚ</td>
                                <td>
                                    <button className="button" onClick={() => this.game_pack("K")}>
                                        <img className="button_image" src="./kostolyBrno/kat_sv_petra_a_pavla.jpg" alt="Kostoly"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>FROZEN</td>
                                <td>
                                    <button className="button" onClick={() => this.game_pack("S")}>
                                        <img className="button_image" src="./img2/frozen.svg" alt="Frozen"/>
                                    </button>
                                </td>
                                
                                <td>NÁMNĚSTÍ V BRNĚ</td>
                                <td>
                                    <button className="button" onClick={() => this.game_pack("N")}>
                                        <img className="button_image" src="./namestiaBrno/svobodak.jfif" alt="Kostoly"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>CARS</td>
                                <td>
                                    <button className="button" onClick={() => this.game_pack("T")}>
                                        <img className="button_image" src="./img3/cars.svg" alt="Cars"/>
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

export default Packages;
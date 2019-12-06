import React, {Component} from "react";
import '../style/App.css';
import {flips} from "./Game_board";

export const packState = {package: 'FIRST'};

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
                            </tr>
                            <tr>
                                <td>FROZEN</td>
                                <td>
                                    <button className="button" onClick={() => this.game_pack("S")}>
                                        <img className="button_image" src="./img2/frozen.jpg" alt="Frozen"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>CARS</td>
                                <td>
                                    <button className="button" onClick={() => this.game_pack("T")}>
                                        <img className="button_image" src="./img3/cars.jpg" alt="Cars"/>
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

/*<td>SNOOPY DOG</td>
<td><img className="button" src="./img/snoopy.png" alt="Logo"/></td>*/
export default Packages;
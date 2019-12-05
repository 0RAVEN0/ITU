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
        flips.count_of_flips = 0;
        flips.correct_pair = 0;
        flips.score = 0;
        return  (
            <div className="gameState">
                <div className="gameBoard">
                    <table>
                        <tbody>
                            <tr onClick={() => this.game_pack("F")}>
                                <td>SNOOPY DOG</td>
                                <td><img className="button" src="./img/snoopy.png" alt="Logo"/></td>
                            </tr>
                            <tr onClick={() => this.game_pack("S")}>
                                <td>FROZEN</td>
                                <td><img className="button" src="./img2/frozen.jpg" alt="Logo"/></td>
                            </tr>
                            <tr onClick={() => this.game_pack("T")}>
                                <td>CARS</td>
                                <td><img className="button" src="./img3/cars.jpg" alt="Logo"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Packages;
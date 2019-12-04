import React, {Component} from "react";
import '../App.css';

const packState = {F: "FIRST",
    S: "SECOND",
    T:"THIRD",
    N:"NULL"};

class Packages extends Component{
    constructor() {
        super();

        this.state={
            gamepack: packState.N,
        };
    }

    game_pack(state){
        switch (this.state.gamepack) {

            case packState.N:
                if (state === "F") {
                    this.setState({gamepack: packState.F});
                }
                if (state === "S") {
                    this.setState({gamepack: packState.S});
                }
                if (state === "T") {
                    this.setState({gamepack: packState.T});
                }
                break;

            case packState.F:
                this.setState({ gamepack: packState.N});
                break;

            case packState.S:
                this.setState({ gamepack: packState.N});
                break;

            case packState.T:
                this.setState({ gamepack: packState.N});
                break;

            default:
                alert("Wrong state\n");
                break;
        }
    }

    render(){
        return  (
            <div className="gameState">
                Choose package...
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
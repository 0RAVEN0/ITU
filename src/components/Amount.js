import React, { Component } from 'react';

import '../App.css';

const heightEnum = {VJS: "4", VJP: "5"};
const widthEnum = {SJT: "3", SJS: "4"};

class Amount extends Component{
    constructor() {
        super();

        this.state={
            height: heightEnum.VJS,
            width: widthEnum.SJS,
        };
    }

    game_amount(state){
        switch (state) {

            case "12":
                this.setState({height: heightEnum.VJS, width: widthEnum.SJT});
                break;

            case "16":
                this.setState({height: heightEnum.VJS, width: widthEnum.SJS});
                break;

            case "20":
                this.setState({height: heightEnum.VJP, width: widthEnum.SJS});
                break;

            default:
                alert("Wrong state\n");
                break;
        }
    }
    render(){
        return  (
            <div className="gameState">
                Vyber si, na koľko kartičiek sa cítiš.
                <div className="gameBoard">
                    <table>
                        <tbody>
                        <tr>
                            <button className="button" onClick={() => this.game_amount("12")}>
                                <p>12</p>
                            </button>
                        </tr>
                        <tr>
                            <button className="button" onClick={() => this.game_amount("16")}>
                                <p>16</p>
                            </button>
                        </tr>
                        <tr>
                            <button className="button" onClick={() => this.game_amount("20")}>
                                <p>20</p>
                            </button>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Amount;
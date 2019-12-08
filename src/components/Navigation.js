/**
 * Vysoké Učení Technické v Brne
 * Fakulta Informačných Technologie
 * Predmet: ITU
 * Projekt: Pexeso
 * 
 * @author Romana Džubárová (xdzuba00)
 * @author Daniel Miloslav Očenáš (xocena06)
 * 
 * @description navigates between various settings and game 
 */

 import React, {Component} from "react";
import {Link } from 'react-router-dom';
import '../style/App.css';

const navStyle = {
    color: 'black'
};

class Navigation extends Component{


    render(){
        return  (
            <div className={`nav${this.props.author}`}>
                <Link style={navStyle} to='/'>
                    <h3>PEXESO</h3>
                </Link>
                <ul className="nav-links">
                    <Link style={navStyle} to='/packages'>
                        { 
                        this.props.author === 'xdzuba00' 
                        ? <li>Change pack style</li>
                        : <li>ZMEŇ KARTY</li>
                        }
                        
                    </Link>
                    <Link style={navStyle} to='/amount'>
                        { 
                        this.props.author === 'xdzuba00' 
                        ? <li>Change number of cards</li>
                        : <li>ZMĚŇ POČET KARET</li>
                        }
                    </Link>
                    <Link style={navStyle} to='/players'>
                        { 
                        this.props.author === 'xdzuba00' 
                        ? <li>Change number of cards</li>
                        : <li>ZMĚŇ POČET KARET</li>
                        }
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Navigation;
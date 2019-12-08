import React, {Component} from "react";
import { Link } from 'react-router-dom';
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
                        <li>Change pack style</li>
                    </Link>
                    <Link style={navStyle} to='/amount'>
                        <li>Change number of cards</li>
                    </Link>
                    <Link style={navStyle} to='/players'>
                        <li>Change number of players</li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default Navigation;
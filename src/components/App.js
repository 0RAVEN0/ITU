/**
 * Vysoké Učení Technické v Brne
 * Fakulta Informačných Technologie
 * Predmet: ITU
 * Projekt: Pexeso
 * 
 * @author Romana Džubárová (xdzuba00)
 * @author Daniel Miloslav Očenáš (xocena06)
 * 
 * @description The main router of the application
 */

import React, { Component } from 'react';
import Amount from './Amount';
import Navigation from './Navigation';
import Packages from './Packages';
import GameBoard from './Game_board';
import Player from "./Player";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../style/App.css';


const author = 'xocena06'; // defines authors visual differences use: xocena06 / xdzuba00

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navigation author={author}/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/packages" component={Packages} />
              <Route path="/amount" component={Amount}/>
              <Route path="/players" component={Player}/>
          </Switch>
        </div>
      </Router>);
  }
}

const Home = () => (
    <div>
        <GameBoard author={author} />
    </div>
);

export default App;

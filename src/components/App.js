import React, { Component } from 'react';
import Amount from './Amount';
import Navigation from './Navigation';
import Packages from './Packages';
import Game_board from './Game_board';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../App.css';

class App extends Component {
  render(){
    return (
            <Router>
              <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/packages" component={Packages}/>
                    <Route path="/amount" component={Amount}/>
                </Switch>
              </div>
            </Router>);
  }
}

const Home = () => (
    <div>
        <Game_board />
    </div>
);

export default App;

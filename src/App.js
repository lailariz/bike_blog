import React, { Component } from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import './App.css';

global.jQuery = require('jquery');
require('bootstrap');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
    };
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(event) {
    console.log(event);
    this.setState({
      lightboxIsOpen: true,
      currentImage: event.currentTarget,
    });
  }

  render() {
    return (
      <div className="App container">
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/About" component={About}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

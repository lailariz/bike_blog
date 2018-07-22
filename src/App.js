import React, { Component } from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
// import Post from './components/Post';
import Routes from './components/Routes';
import './App.css';
import p1 from './posts/07-01-2018';
import p2 from './posts/07-08-2018';
import p3 from './posts/07-09-2018';
import p4 from './posts/07-12-2018';
import p5 from './posts/07-15-2018';
import p6 from './posts/07-17-2018';
import p7 from './posts/07-19-2018';

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
          <div>

            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/About" component={About}/>
              <Route path="/Routes" component={Routes}/>
              <Route path="/post/07-01-2018" component={p1}/>
              <Route path="/post/07-08-2018" component={p2}/>
              <Route path="/post/07-09-2018" component={p3}/>
              <Route path="/post/07-12-2018" component={p4}/>
              <Route path="/post/07-15-2018" component={p5}/>
              <Route path="/post/07-17-2018" component={p6}/>
              <Route path="/post/07-19-2018" component={p7}/>
              <Redirect to="/" />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;

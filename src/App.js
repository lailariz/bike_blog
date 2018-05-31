import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgBrowser from './components/ImgBrowser';
import Gallery from 'react-photo-gallery';

const photos = [
      {src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=1024&h=1024', width:1, height:1},
      {src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?w=1024&h=1024', width:1, height:1},
      {src: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=1024&h=1024', width:1, height:1},
      {src: 'https://images.unsplash.com/photo-1470854989922-5be2f7456d78?w=1024&h=1024', width:1, height:1},
];

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blog</h1>
        </header>
        <Gallery photos={photos} onClick={this.openLightbox}/>
        <ImgBrowser photos={photos} currentImage={this.state.currentImage} lightboxIsOpen={this.state.lightboxIsOpen} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

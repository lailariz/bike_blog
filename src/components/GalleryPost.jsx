import React, { Component } from 'react';
import ImgBrowser from './components/ImgBrowser';
import Gallery from 'react-photo-gallery';

const photos = [
  {src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=1024&h=1024', width:1, height:1},
  {src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?w=1024&h=1024', width:1, height:1},
  {src: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=1024&h=1024', width:1, height:1},
  {src: 'https://images.unsplash.com/photo-1470854989922-5be2f7456d78?w=1024&h=1024', width:1, height:1},
];

class Post extends Component {
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox}/>
        <ImgBrowser photos={photos} currentImage={this.state.currentImage} lightboxIsOpen={this.state.lightboxIsOpen} />
      </div>
    );
  }
}

export default Post;

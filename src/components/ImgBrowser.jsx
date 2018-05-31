import React, { Component } from 'react';
import Lightbox from 'react-images';

class ImgBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToImage = this.goToImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const index = nextProps.photos.indexOf(nextProps.photos.find(function(img) {
        if (img.src === nextProps.currentImage.src) {
          return true;
        }
        return false;
    }));

    this.setState({
      lightboxIsOpen: nextProps.lightboxIsOpen,
      currentImage: index,
    });
  }

  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) {
      return;
    }
    this.goToNext();
  }

  goToImage (index) {
    this.setState({currentImage: index});
  }

  openLightbox (event, index) {
    event.preventDefault();
    this.setState({
      currentImage: index.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  goToPrevious () {
    this.setState({
        currentImage: this.state.currentImage - 1,
    });
  }

  goToNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render () {
    return (
        <Lightbox
          images={this.props.photos}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.goToPrevious}
          onClickNext={this.goToNext}
          onClickThumbnail={this.goToImage}
          onClose={this.closeLightbox}
          showThumbnails={true}
        />
    );
  }
}

export default ImgBrowser;

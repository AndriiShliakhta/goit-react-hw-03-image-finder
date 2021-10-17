import axios from 'axios';
import React, { Component } from 'react';

class ImageGallery extends Component {
  state = {
    images: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      await axios
        .get(
          `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(resp => {
          this.setState({ images: resp.data.hits });
        });
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        {this.state.images &&
          this.state.images.map(image => {
            return (
              <li className="ImageGalleryItem" key={image.id}>
                <img
                  src={image.previewURL}
                  alt=""
                  className="ImageGalleryItem-image"
                />
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ImageGallery;

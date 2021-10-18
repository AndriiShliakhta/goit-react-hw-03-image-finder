import axios from 'axios';
import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ loading: true, images: null });
      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.imageName}&page=${this.state.page}&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(resp => {
          this.setState({ images: resp.data.hits });
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }
  render() {
    const { images, loading, error } = this.state;

    return (
      <ul className="ImageGallery">
        {error && <h1>{error.message}</h1>}
        {loading && <div>Загружаю...</div>}
        {images &&
          images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
              />
            );
          })}
      </ul>
    );
  }
}

export default ImageGallery;

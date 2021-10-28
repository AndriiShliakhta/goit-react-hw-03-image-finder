import axios from 'axios';
import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import { SpinnerDotted } from 'spinners-react';

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    page: 1,
  };

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevProps.imageName !== this.props.imageName
    ) {
      this.getData();

      if (prevProps.imageName !== this.props.imageName) {
        this.setState({ images: null, page: 1 });
      }
    }
  }

  getData = () => {
    this.setState({ loading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=${this.state.page}&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(resp => {
        this.setState(prev => ({
          images:
            prev.page === 1
              ? resp.data.hits
              : [...prev.images, ...resp.data.hits],
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <>
        <ul className="ImageGallery" onClick={this.props.openModal}>
          {error && <h1>{error.message}</h1>}
          {loading && <SpinnerDotted />}
          {images &&
            images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  webformatURL={image.webformatURL}
                  largeImageURL={image.largeImageURL}
                />
              );
            })}
        </ul>
        {images && <Button className="Button" loadMore={this.loadMore} />}
      </>
    );
  }
}

export default ImageGallery;

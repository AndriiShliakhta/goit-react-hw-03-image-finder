import axios from 'axios';
import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    page: 1,
  };

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    // console.log(this.state.page);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevProps.imageName !== this.props.imageName
    ) {
      // console.log(prevState.page);
      // console.log(this.state.page);
      // console.log(prevProps.imageName);
      // console.log(this.props.imageName);

      this.getData(this.state.page, this.props.imageName);
    }
  }

  getData = (page, imgName) => {
    this.setState({ loading: true });
    // console.log(this.state.page);

    axios
      .get(
        `https://pixabay.com/api/?q=${imgName}&page=${page}&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(resp => {
        console.log(this.state.images);
        this.setState(prev => ({
          images:
            prev.page === 1
              ? resp.data.hits
              : [...prev.images, ...resp.data.hits],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <>
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
        {images && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

export default ImageGallery;

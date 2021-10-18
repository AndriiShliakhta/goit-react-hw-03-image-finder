import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    imageName: '',
  };
  formSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <Button />
      </>
    );
  }
}

export default App;

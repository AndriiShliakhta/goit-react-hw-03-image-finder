import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    imageName: '',
    isOpenModal: false,
    lagreImgURL: '',
  };
  formSubmit = imageName => {
    this.setState({ imageName });
  };
  openModal = e => {
    if (e.target.tagName === 'IMG') {
      this.setState({ isOpenModal: true });
      this.setState({ lagreImgURL: e.target.dataset.large });
    }
  };

  // зробити розмонтирування
  closeModal = e => {
    this.setState({ isOpenModal: false });

    // if (e.target) {
    //   this.setState({ isOpenModal: true });
    //   this.setState({ lagreImgURL: e.target.dataset.large });
    // }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery
          imageName={this.state.imageName}
          openModal={this.openModal}
        />
        {this.state.isOpenModal && (
          <Modal
            lagreImgURL={this.state.lagreImgURL}
            openModal={this.openModal}
            onClick={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default App;

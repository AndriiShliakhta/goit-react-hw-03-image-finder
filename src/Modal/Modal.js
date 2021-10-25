import React, { Component } from 'react';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.onHandleEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onHandleEscapeClick);
  }

  onHandleEscapeClick = e => e.code === 'Escape' && this.props.toggleModal();

  onOverlayClick = e => {
    if (e.target === e.currentTarget) this.props.toggleModal();
  };

  render() {
    return (
      <div className="Overlay" onClick={this.onOverlayClick}>
        <div className="Modal">
          <img src={this.props.lagreImgURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

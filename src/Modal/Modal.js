import React, { Component } from 'react';

class Modal extends Component {
  state = {};
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.lagreImgURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

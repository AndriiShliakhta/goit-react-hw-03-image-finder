import React, { Component } from 'react';

class Button extends Component {
  state = {};

  render() {
    return (
      <button type="button" onClick={this.props.loadMore}>
        Load More
      </button>
    );
  }
}

export default Button;

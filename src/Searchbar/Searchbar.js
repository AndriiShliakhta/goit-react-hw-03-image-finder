import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ imageName: currentTarget.value });
    // console.log(this.state.imageName);
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.imageName.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.imageName);

    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    input: '',
    checkbox: true,
  };

  handleInput = (e) => {
    this.setState(
      {
        input: e.target.value,
      },
      () => {
        this.props.handleSearchbar(this.state.input);
      }
    );
  };

  handleCheckbox = (e) => {
    this.setState(
      {
        checkbox: e.target.checked,
      },
      () => {
        this.props.handleCheckbox(this.state.checkbox);
      }
    );
  };

  render() {
    return (
      <div className="search">
        <h4>Search</h4>
        <input
          type="search"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <br />
        <input type="checkbox" onChange={this.handleCheckbox} />
        <label>Hide out of stock</label>
      </div>
    );
  }
}

export default SearchBar;

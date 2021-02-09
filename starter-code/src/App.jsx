import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import jsondata from './data.json';
import './App.css';

export default class App extends Component {
  state = {
    products: jsondata.data,
    filterProducts: [],
  };

  handleSearchbar = (input) => {
    let productsCopy = [...this.state.products];
    let newProducts = input
      ? productsCopy.filter((product) => {
          return product.name
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase());
        })
      : jsondata.data;

    this.setState({
      filterProducts: newProducts,
    });
  };

  handleCheckbox = (checked) => {
    let productsCopy = [...this.state.products];
    let newProducts = checked
      ? productsCopy.filter((product) => {
          return product.stocked === true;
        })
      : jsondata.data;

    this.setState({
      filterProducts: newProducts,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleSearchbar={this.handleSearchbar}
          handleCheckbox={this.handleCheckbox}
        />
        <br />
        {this.state.filterProducts.length !== 0 ? (
          <ItemList products={this.state.filterProducts} />
        ) : (
          <ItemList products={this.state.products} />
        )}
      </div>
    );
  }
}

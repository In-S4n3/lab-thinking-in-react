import React, { Component } from 'react';
import '../App.css';

export class Items extends Component {
  render() {
    return (
      <div
        className="container"
        style={
          this.props.product.stocked ? { color: 'black' } : { color: 'red' }
        }
      >
        <div>{this.props.product.name}</div>
        <div>{this.props.product.price}</div>
      </div>
    );
  }
}

export default Items;

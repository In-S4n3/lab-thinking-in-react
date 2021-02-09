import React, { Component } from 'react';
import Items from './Items';

export class ItemList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product, index) => {
          return (
            <Items key={index} product={product} />
          );
        })}
      </div>
    );
  }
}

export default ItemList;

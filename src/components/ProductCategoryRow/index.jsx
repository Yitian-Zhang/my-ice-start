import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <label>
          {this.props.category}
        </label>
      </tr>
    )
  }
}

export default ProductCategoryRow;

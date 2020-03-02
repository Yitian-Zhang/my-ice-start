import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class ProductSearchBar extends Component {

  handleFilterChange = (event) => {
    this.props.onFilterChange(event.target.value);
    // console.log("filterText: " + event.target.name + ", " + event.target.value);

  };

  handleStockChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.props.onStockChange(value);
    // console.log("isStockOnly: " + event.target.name + ", " + value);

  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filterText}
          name="searchProduct"
          onChange={this.handleFilterChange}/>

        <div className="searchCheckDiv">
          <input
            type="checkbox"
            checked={this.props.isStockOnly}
            name="hasStock"
            onChange={this.handleStockChange}
            style={{display: 'inline'}}/>

          &nbsp; &nbsp;
          <p style={{display: 'inline'}}>
            Only show products in stock.
          </p>
        </div>
        <br/>
      </div>
    )
  }
}

export default ProductSearchBar;

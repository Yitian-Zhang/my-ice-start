import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductSearchBar from "../ProductSearchBar";
import ProductTable from "../ProductTable";

class ProductFilterTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false,
    }
  }

  handelFilter = (filterText) => {
    this.setState({
      filterText: filterText
    });

  };

  handleStock = (checked) => {
    this.setState({
      isStockOnly: checked,
    });
  };


  render() {
    const products = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

    console.log("filterText updated: " + this.state.filterText);
    console.log("checked updated: " + this.state.isStockOnly);

    return (
      <div>
        <h1>React Practice</h1>
        <ProductSearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterChange={this.handelFilter}
          onStockChange={this.handleStock} />

        <ProductTable
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          products={products} />
      </div>
    )
  }

}
export default ProductFilterTable;

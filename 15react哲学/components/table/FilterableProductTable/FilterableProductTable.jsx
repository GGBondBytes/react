import React, {Component} from 'react';
import ProductsTable from "./ProductTable/ProductsTable";
import SearchBar from './SearchBar/SearchBar'
class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
       this.state={
           filterText: 'b',
           inStockOnly: false
       }
    }
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    isStockOnly={this.state.isStockOnly} />
                <ProductsTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    isStockOnly={this.state.isStockOnly} />
            </div>
        );
    }
}

export default FilterableProductTable;

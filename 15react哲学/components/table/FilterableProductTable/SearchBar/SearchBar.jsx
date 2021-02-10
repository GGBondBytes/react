import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        const isStockOnly = this.props.isStockOnly;
        const filterText=this.props.filterText;
        return (
            <form>
                <input type="text" placeholder="Search..." value={filterText}/>
                <p>
                    <input type="checkbox" checked={isStockOnly}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;

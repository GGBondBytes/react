import React, {Component} from 'react';

class ProductCategoryRow extends Component {
    render() {
        const category=this.props.category;
        return (
            <div>
                <tr>
                    <th colSpan="2">
                        {category}
                    </th>
                </tr>
            </div>
        );
    }
}

export default ProductCategoryRow;

import React from 'react';
function SearchBar(props) {
    return (
        <form className='SearchBar'>
            <label>
                <input
                    value={props.filterText}
                    onChange={props.onChange} />
            </label>
            <br />
            <label>
                <input type='checkbox' checked={props.inStockOnly}
                    onClick={props.onClick} />
                Only show products in stock
                </label>
        </form>
    )
}
function ProductTable(props) {
    let products = [
        { stocked: true, name: "Sporting Goods", price: "" },
        { category: "SportingGoods", price: "$49.99", stocked: true, name: "Football" },
        { category: "SportingGoods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "SportingGoods", price: "$29.99", stocked: false, name: "Basketball" },
        { stocked: true, name: 'Electronics', price: "" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ]
    products = props.inStockOnly ? products.filter(index => index.stocked === true) : products;
    console.log(props.filterText);
    products= props.filterText!=='' ? products.filter(index => index.name=== props.filterText) : products;
    products = products.map(obj => <li key={obj.name}>{obj.name + '  ' + obj.price}</li>)
    return (
        <div className='ProductTable'>
            <p>{'Name   Price'}</p>
            {products}
        </div>
    )
}
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    handleChange(e) {
        this.setState({
            filterText: e.target.value
        })
    }
    handleClick() {
        this.setState({
            inStockOnly: !this.state.inStockOnly
        })
    }
    render() {
        return (
            <div className='FilterableProductTable'>
                <SearchBar
                    onChange={(e) => this.handleChange(e)}
                    onClick={() => this.handleClick()} />
                <ProductTable
                    inStockOnly={this.state.inStockOnly}
                    filterText={this.state.filterText} />
            </div>
        )
    }
}

export default FilterableProductTable;
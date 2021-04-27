import React, { Component } from 'react';
import PRODUCTS from './data/products';

class Product extends Component {
  state = { qty: 0 };

  buy = () => {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.product.price)
  }

  show = () => {
    this.props.handleShow(this.props.product.name);
  }

  render() {
    const { name, price } = this.props.product;
    return(
      <div className="product-content">
        <p>{name} - ${price}</p>
        <button className="buy" onClick={this.buy}>Buy</button>
        <button className="show" onClick={this.show}>Show</button>
        <p>Qty: {this.state.qty} items</p>
      </div>
    )
  }
}

class ProductForm extends Component {
  state = { qty: 0 };
  
  submit = (e) => {
    e.preventDefault();
    const prodName = this.refs.name.value;
    const prodPrice = this.refs.price.value;
    if (prodName && prodPrice) {
      var product = {
        name: prodName,
        price: parseInt(prodPrice),
      }
      this.props.handleCreate(product);
    } else {
      alert('Please enter product name');
    }
      
    this.refs.name.value  = '';
    this.refs.price.value  = '';
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <input type="text" placeholder="name" ref="name" />
        <input type="text" placeholder="price" ref="price" />
        <br/><br/>
        <button>Create Product</button>
      </form>
    );
  }
}

class Products extends Component {

  state = { total: 0, productList: PRODUCTS};

  createProduct = (product) => {
    this.setState({
      productList: this.state.productList.concat(product)
    })
  }

  calculateTotal = (price)  => {
    this.setState({total: this.state.total + price})
    //alert(this.state.total)
  }

  showProduct = (name) => {
    alert('you selected ' + name)
  }

  render() {
    var components = this;
    return (
      <div>
        <div>
          {
            this.state.productList.map(PRODUCT => {
              return (
                <Product key={PRODUCT.id} product={PRODUCT} handleShow={components.showProduct} handleTotal={components.calculateTotal}/>
              );
            })
          }
          <div></div>
        </div>
        <div className="form-add">
        <ProductForm handleCreate={this.createProduct}/>
        </div>
        <div className="total-cash">
          <h3>Total Cash: ${this.state.total}</h3>
        </div>
      </div>
    )
  }
}

export default Products;
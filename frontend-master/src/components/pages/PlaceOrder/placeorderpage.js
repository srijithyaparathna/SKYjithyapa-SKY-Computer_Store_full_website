import React, { Component } from 'react';
import Header from "../HomePageUser/Header/Header";
import Footer from "../../footer/Footer";
import './placeorderpage.css'

class placeorderpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderdate: '',
      customername: '',
      products: [], // Initially an empty array for products
      totalamount: 0,
      newProductName: '', // State for the new product's name
      newProductPrice: '', // State for the new product's price
    };
  }

  // Function to handle the addition of a new product
  addProduct = () => {
    const { newProductName, newProductPrice } = this.state;
    if (newProductName && newProductPrice) {
      // Create a new product object
      const newProduct = {
        name: newProductName,
        price: parseFloat(newProductPrice),
      };

      // Add the new product to the products list
      this.setState((prevState) => ({
        products: [...prevState.products, newProduct],
        newProductName: '', // Reset the input fields
        newProductPrice: '',
      }));
    }
  }

  // Function to calculate the total amount
  calculateTotalAmount = () => {
    const { products } = this.state;
    const total = products.reduce((acc, product) => acc + product.price, 0);
    this.setState({ totalamount: total });
  }

  render() {
    return (
      <div className='placeorderall'>
        {/* <Header /> */}
        <div className='placeorderbody' >
        <div className='placeorderform'>
          <h1>Place Your Order</h1>
          <label>Order Date:</label>
          <input
            type="text"
            value={this.state.orderdate}
            onChange={(e) => this.setState({ orderdate: e.target.value })}
          />
          <br />
          <label>Customer Name:</label>
          <input
            type="text"
            value={this.state.customername}
            onChange={(e) => this.setState({ customername: e.target.value })}
          />
          <br />
          <label>Products:</label>
          <ul>
            {this.state.products.map((product, index) => (
              <li key={index}>{product.name} - ${product.price}</li>
            ))}
          </ul>
          <br />
          <label>Total Amount: ${this.state.totalamount}</label>
          <br />
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              value={this.state.newProductName}
              onChange={(e) => this.setState({ newProductName: e.target.value })}
            />
            <label>Product Price:</label>
            <input
              type="text"
              value={this.state.newProductPrice}
              onChange={(e) => this.setState({ newProductPrice: e.target.value })}
            />
            <button onClick={this.addProduct}>Add Item</button>
            <button onClick={this.calculateTotalAmount}>Calculate Total</button>
          </div>
        </div>
        </div>
       {/* <Footer/> */}
      </div>
    );
  }
}

export default placeorderpage;

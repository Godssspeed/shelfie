import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      productName: "",
      price: 0,
      products: []
    };
  }

  handleChange = (value, id) => {
    this.setState({ [id]: value });
  };

  handleReset = () => {
    this.setState({ img: "", productName: "", price: 0 });
    // console.log(this.state);
  };

  handlePost = () => {
    const { img, productName, price } = this.state;
    axios
      .post("/api/products", {
        name: productName,
        price: price,
        img: img
      })
      .then(response => {
        console.log(response);
        this.setState({ products: response.data });
      });
  };

  render() {
    const { img, productName, price } = this.state;
    const uploadImg = "https://dummyimage.com/600x400/000/fff&text=Upload+:)";

    return (
      <div className="form">
        <img src={uploadImg} alt="dummy" />
        <div className="inputs">
          <span>Image URL:</span>
          <input onChange={e => this.handleChange(e.target.value)} />
          <span>Product Name:</span>
          <input onChange={e => this.handleChange(e.target.value)} />
          <span>Price:</span>
          <input onChange={e => this.handleChange(e.target.value)} />
        </div>
        <div>
          <button className="btn" onClick={() => this.handleReset()}>
            cancel
          </button>
          <button className="btn" onClick={() => this.handlePost()}>
            Add to Inventory
          </button>
        </div>
      </div>
    );
  }
}

export default Form;

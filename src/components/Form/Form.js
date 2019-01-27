import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      productName: "",
      price: 0,
      products: []
    };
  }

  handleChange = e => {
    this.setState({ img: e.target.value });
    // console.log([id]);
  };
  handleChange2 = f => {
    this.setState({ productName: f.target.value });
    // console.log([id]);
  };
  handleChange3 = g => {
    this.setState({ price: g.target.value });
    // console.log([id]);
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
        this.props.handleGet();
        this.handleReset();
        this.setState({ products: response.data });
      });
    // this.handleGet();
  };

  render() {
    const { img, productName, price } = this.state;
    const uploadImg = "https://dummyimage.com/600x400/000/fff&text=Upload+:)";
    // const { handleGet } = this.props;
    console.log(this.state);

    return (
      <div className="form">
        <img src={uploadImg} alt="dummy" />
        <div className="inputs">
          <span>Image URL:</span>
          <input value={img} onChange={e => this.handleChange(e)} />
          <span>Product Name:</span>
          <input value={productName} onChange={f => this.handleChange2(f)} />
          <span>Price:</span>
          <input value={price} onChange={g => this.handleChange3(g)} />
        </div>
        <div>
          <button className="btn" onClick={() => this.handleReset()}>
            cancel
          </button>
          <button
            className="btn"
            onClick={() => this.handlePost()}
            // onClick={() => handleGet()}
            // onClick={() => this.handleReset()}
          >
            Add to Inventory
          </button>
        </div>
      </div>
    );
  }
}

export default Form;

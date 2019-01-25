import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          id: 1,
          name: "Xbox",
          price: 500,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/61FYKKfyJHL._SL1400_.jpg"
        },
        {
          id: 2,
          name: "PS4",
          price: 400,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_SX430_.jpg"
        },
        {
          id: 3,
          name: "Switch",
          price: 300,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._SL1000_.jpg"
        },
        {
          id: 4,
          name: "GTX 2080TI",
          price: 1500,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/514km%2BZccrL._SL1000_.jpg"
        }
      ]
    };
  }

  // componentDidMount() {
  //   axios.get("/api/products").then(response => {
  //     this.setState({ products: response.data });
  //     console.log(this.state.products);
  //   });
  // }

  render() {
    // console.log(this.state.products);
    return (
      <div>
        <div>
          <Header />
        </div>
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;

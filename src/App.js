import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };

    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  }

  handleGet = () => {
    axios.get("/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  };

  render() {
    // console.log(this.state.inventory);
    return (
      <div>
        <div>
          <Header />
        </div>
        <Dashboard inventory={this.state.inventory} />
        <Form handleGet={this.handleGet} />
      </div>
    );
  }
}

export default App;

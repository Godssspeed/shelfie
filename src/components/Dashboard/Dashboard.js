import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { inventory } = this.props;
    const products = inventory.map((e, i) => {
      return (
        <Product key={i} id={e.id} name={e.name} price={e.price} img={e.img} />
      );
    });

    return (
      <div>
        <h1>Dashboard</h1>
        {products}
      </div>
    );
  }
}

export default Dashboard;

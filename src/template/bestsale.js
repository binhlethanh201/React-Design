import React, { Component } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { data } from "../data";

class Bestsale extends Component {
  getTop = (products, orders) => {
    const count = {};
    orders.forEach((order) => {
      order.products.forEach((c) => {
        if (!count[c.pId]) {count[c.pId] = 0;}
        count[c.pId] += c.quantity;
      });
    });
    const bestProducts = products.map((product) => ({...product,total: count[product.pId] || 0,}));
    return bestProducts.sort((x, y) => y.total - x.total).slice(0, 4);
  };
  render() {
    const { products, orders } = data; 
    const bestProducts = this.getTop(products, orders); 
    return (
      <div>
        <div className="row">
            {bestProducts?.map((c) => (
              <div className="col-md-3 mb-4">
                <div className="card" style={{ width: "100%" }}>
                  <img
                    src={`images/${c.thumbnail}`}
                    className="card-img-top"
                    alt={c.name}
                  />
                  <div className="card-body">
                    <div style={{ textAlign: "center" }}>
                      <h3
                        className="card-title"
                        style={{ color: "blue", textDecoration: "underline" }}
                      >
                        {c.name}
                      </h3>
                      <p className="card-text">Price: ${c.price}</p>
                    </div>
                    <h5 className="btn">Discount: {c.discount} %</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    );
  }
}

export default Bestsale;
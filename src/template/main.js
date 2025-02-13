import { Component } from "react";
import {
  Col,
  Row,
} from "react-bootstrap";
import { data } from "../data";
import Bestsale from "./bestsale";
class Main extends Component {
  render() {
    const newPro = data?.products.sort((x, y) => y.pId - x.pId).slice(0, 4);
    return (
      <Row>
        <Col sm={2} md={2} className="d-none d-sm-block">
          <ul class="list-unstyled ps-0">
            Left
          </ul>
        </Col>
        <Col sm={10} md={8} className="">
          <h1>Best Sale</h1>
          <Bestsale/>
          <h1>New Product</h1>
          <div className="row">
            {newPro?.map((c) => (
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
        </Col>
        <Col md={2} className="d-none d-sm-none d-md-block">
          <ul class="list-unstyled ps-0">
           Right
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Main;

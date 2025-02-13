import { Component } from "react";
import {
  Col,
  Row,
} from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row md={8}>
            <img
              src="bootstrap_logo.jpg"
              style={{ width: "100px", height: "auto" }}
              alt="Bootstrap Logo"
            />
          </Row>
        </Col>
        <Col
          md={4}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <span style={{ textAlign: "right" }}>Welcome</span>
          <a
            href="signin"
            style={{
              textDecoration: "none",
              color: "inherit",
              textAlign: "center",
            }}
          >
            Sign in
          </a>
        </Col>
      </Row>
    );
  }
}

export default Header;

import { Component } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { data } from "../data";

class Detail extends Component {
    render() {
        const detailProduct = [...data.products];

        return (
            <Container>
                <Row>
                    {detailProduct.map((product) => (
                        <Col md={3} className="mb-4" key={product.pId}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={`images/${product.thumbnail}`}
                                    alt={product.name}
                                />
                                <Card.Body>
                                    <Card.Title
                                        className="text-center text-primary"
                                        style={{ textDecoration: "underline" }}
                                    >
                                        {product.name}
                                    </Card.Title>
                                    <Card.Text className="text-center">
                                        Price: ${product.price}
                                    </Card.Text>
                                    <Card.Text>Discount: {product.discount}%</Card.Text>
                                    <Card.Text>Comments:</Card.Text>
                                    {product.comments.map((comment, index) => (
                                        <div key={index}>
                                            <p><strong>Text:</strong> {comment.text}</p>
                                            <p><strong>Rating:</strong> {comment.rating} stars</p>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Detail;
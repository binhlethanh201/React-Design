import { Component } from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";

class Banner extends Component {
    render() {
        return (
            <Row className="banner">
                <Col container-fluid style={{ padding: "0px" }}>
                    <Carousel>
                        <Carousel.Item>
                            {/* <ExampleCarouselImage text="First slide" /> */}
                            <Image src="/images/banner1.jpg" style={{ width: "100%" , height: "500px" }} />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="/images/banner3.jpg" style={{ width: "100%", height: "500px" }} />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="/images/banner2.avif" style={{ width: "100%", height: "500px" }} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        )
    }
}

export default Banner;
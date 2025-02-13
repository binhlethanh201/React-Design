import { Component } from "react";
import { Col, Container, Row , InputGroup, Navbar, Nav, Form, Dropdown} from "react-bootstrap";
class Menu extends Component{
    render(){
        return(
            <Row>
            <Col>
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="#home">Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#docs">Docs</Nav.Link>
                      <Nav.Link href="#example">Example</Nav.Link>
                      <Nav.Link href="#icons">Icons</Nav.Link>
                      <Nav.Link href="#themes">Themes</Nav.Link>
                      <Nav.Link href="#blog">Blog</Nav.Link>
                    </Nav>
                    <Form inline>
                      <InputGroup>
                        <InputGroup.Text id="basic-addon1">Q</InputGroup.Text>
                        <Form.Control
                          placeholder="Search"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    
                    </Form>
                        {/* <Nav>
                            <NavItem>a</NavItem>
                            <NavItem>b</NavItem>
                            <NavItem>c</NavItem>
                        </Nav>
                    <hr/>
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">V5.3</Dropdown.Toggle>
                      <Dropdown.Menu> v5 releases
                        <Dropdown.Item href="#/action-1">Latest (5.3.X)</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">v5.2.3</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">v5.1.3</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">v5.0.2</Dropdown.Item>
                        <Dropdown.Divider /> Previous releases
                        <Dropdown.Item href="#/action-5">v4.6.x</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">v2.4.1</Dropdown.Item>
                        <Dropdown.Item href="#/action-7">v2.3.2</Dropdown.Item>
                        <Dropdown.Divider /> 
                        <Dropdown.Item href="#/action-8">All versions</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
                    <hr/>
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">V</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Light</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Dark</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Auto</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        )
    }
}

export default Menu;
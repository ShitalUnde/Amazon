import { useState } from "react";
import { Navbar, Container, Nav, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkout } from "./Checkout";
import Products from "./Products";
import Col from 'react-bootstrap/Col';
import "./assets/loader.css";
import "./App.css";

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div>
      <Navbar bg="secondary" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="LOGO"
              src="https://picsum.photos/150"
              width="30"
              height="30"
              style={{ borderRadius: "5rem" }}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col justify-content-start me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>

            <Button
              variant="outline-dark"
              onClick={() => setShowCheckout(true)}
            >
              <i className="fas fa-shopping-cart">
                <span style={{ paddingLeft: "5px" }}>{cartItem.length}</span>
              </i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <Container>
        <Row>
          <Col>
            <Products setCartItem={setCartItem} />
          </Col>

          <Checkout
            cartItem={cartItem}
            useModalEffect={setShowCheckout}
            show={showCheckout}
          />
        </Row>
      </Container>
    </div>
  );
}

import { useState } from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Checkout } from "./Checkout";
import "./assets/loader.css";
import "./App.css"

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Amazon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <a href="#" className="nav-item nav-link active">
                Home
              </a>
              <a href="#" className="nav-item nav-link">
                Services
              </a>
              <a href="#" className="nav-item nav-link">
                About
              </a>
              <a href="#" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <div className="navbar-nav">
              <Button
                variant="primary"
                onClick={() => setShowCheckout(true)}
              >
                <i className="fas fa-shopping-cart">
                  <span style={{ paddingLeft: "5px" }}>{cartItem.length}</span>
                </i>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Products setCartItem={setCartItem} />
          </div>
        </div>
      </div>
      <Checkout
        cartItem={cartItem}
        useModalEffect={setShowCheckout}
        show={showCheckout}
      />
    </>
  );
}
import { useState } from "react";
import Products from "./Products";
import "./assets/loader.css";

export default function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Amazon
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
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
            <div className="navbar-nav ms-auto">
              <button className="btn btn-primary">
                <i className="fas fa-shopping-cart">
                  <span style={{ paddingLeft: "5px" }}>{cartItem.length}</span>
                </i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <>
        <div className="row m-3">
          <Products setCartItem={setCartItem} />
        </div>
        <hr />
      </>
    </>
  );
}

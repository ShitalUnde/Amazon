import { useState, useEffect } from "react";
import Products from "./Products";

export default function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     const newData = await response.json();
  //     setData(newData);
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            {/* <div className="navbar-nav ms-auto">
              <button type="button" className="btn btn-primary">
                <i className="fas fa-shopping-cart mr-1"></i> Cart
                <span className="badge badge-light ml-1">0</span>
              </button>
            </div> */}
          </div>
        </div>
      </nav>
      <>
        <div className="row m-3" >
          <Products />
        </div>
        <hr />
        <footer>
          <div className="row">
            <div className="col-md-6">
              <p>Copyright © 2021 Tutorial Republic</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-dark">
                Terms of Use
              </a>
              <span className="text-muted mx-2">|</span>
              <a href="#" className="text-dark">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}

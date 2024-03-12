import React, { useState } from "react";

const Product = (props) => {
  //   const [productQty, setproductQty] = useState(props.product.qty);
  const [product, setproduct] = useState(props.product);

  const AddProductInCart = (operation) => {
    let temp = { ...product };
    if (operation === "add") {
      temp.qty = temp.qty + 1;
      setproduct(temp);
    } else {
      temp.qty = temp.qty - 1;
      setproduct(temp);
    }

    props.addItemToCart(temp);
  };

  //   console.log(props.product);
  return (
    //   <div className="col-md-6 col-lg-4 col-xl-3">
    //     <center>
    //       <h3>{product.title}</h3>
    //       <p>
    //       {product.description}

    //       </p>
    //       <p>
    //         <button className="btn btn-success">Learn More &raquo;</button>
    //       </p>
    //     </center>
    //   </div>

    <div className="card" style={{ width: "18rem", margin: "3px" }}>
      <img
        className="card-img-top"
        width="200"
        height="150"
        src={product.images[0]}
        alt="Card image cap"
      />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <div
          className="btn-group d-flex justify-content-between"
          role="group"
          aria-label="Basic example"
        >
          <div>
            <button
              disabled={product.qty >= 3}
              type="button"
              onClick={() => AddProductInCart("add")}
              className="btn btn-success"
            >
              +
            </button>
            <button type="button" className="btn btn-secondary">
              {product.qty}
            </button>
            <button
              disabled={product.qty <= 0}
              type="button"
              onClick={() => AddProductInCart("substract")}
              className="btn btn-danger"
            >
              -
            </button>
          </div>

          {/* Align the price to the right */}
          <div className="text-right">
            <p>
              {product.qty > 0 && (
                <span>Price: {product.qty * product.price}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

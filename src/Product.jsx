import { useState } from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";
import CarouselCustom from "./CarouselCustom";

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

    handleCartItems(temp, operation);
  };

  const handleCartItems = (updatedProduct, operation) => {
    if (operation === "add") {
      if (props.cart.length <= 0) {
        props.addItemToCart([{ ...updatedProduct }]);
      } else {
        const findIndex = props.cart.findIndex(
          (element) => element.id === updatedProduct.id
        );
        console.log(findIndex);
        if (findIndex <= -1) {
          props.addItemToCart([...props.cart, { ...updatedProduct }]);
        } else {
          props.cart[findIndex] = { ...updatedProduct };
          props.addItemToCart([...props.cart]);
        }
      }
    } else {
      const findIndex = props.cart.findIndex(
        (element) => element.id === updatedProduct.id
      );
      if (findIndex > -1) {
        if (updatedProduct.qty <= 0) {
          props.cart.splice(findIndex, 1);
          props.addItemToCart([...props.cart]);
        } else {
          props.cart[findIndex] = { ...updatedProduct };
          props.addItemToCart([...props.cart]);
        }
      }
    }
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
      <div className="card">
        <center>
          <h6 className="p-2">{product.title}</h6>
        </center>
        {/* <img
          className="card-img-top"
          width="200"
          height="200"
          src={product.images[0]}
          alt="Card image cap"
        /> */}
        <CarouselCustom images={product.images}/>

        <div className="card-body">
          <p className="card-text" style={{ height: "105px" }}>
            {product.description}
          </p>

         <div className="mb-4">
         <Rating rating={product.rating} parentIndex={props.parentIndex} />
         </div>

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

            <div className="text-right col-4">
              <p>
              <span>Price: {product.price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  parentIndex:PropTypes.number.isRequired
};

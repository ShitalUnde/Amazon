import { useState, useEffect } from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const Products = ({ setCartItem }) => {
  const [productList, setproductList] = useState(null);
  let [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products");
        const jsonData = await resp.json();
        jsonData.products.forEach((element) => {
          element.qty = 0;
        });

        setproductList(jsonData.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(`cart...........`, cart);
    setCartItem([...cart]);
  }, [cart]);

  return (
    <>
      {/* {productList &&
        productList.map((item, index) => (
          <Product key={index} cart={cart} addItemToCart={setCart} product={item} />
        ))} */}

      {loading ? ( // Display progress loader if data is being fetched
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
      ) : (
        <div className="row mt-5">
          {productList &&
            productList.map((item, index) => (
              <Product
                key={index}
                addItemToCart={setCart}
                cart={cart}
                product={item}
                parentIndex={index}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default Products;

Products.propTypes = {
  setCartItem: PropTypes.func.isRequired,
};

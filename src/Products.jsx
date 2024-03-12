import { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [productList, setproductList] = useState(null);
  let [cart, setCart] = useState(null);

  const arr = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products");
        const jsonData = await resp.json();
        jsonData.products.forEach((element) => {
          element.qty = 0;
        });
        setproductList(jsonData.products);
        console.log(jsonData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {}, [cart]);

  const setCartCount = (data) => {
    // arr.push(data);
//console.log(arr);
  
    if(cart !== null){
        cart.forEach((el, index) => {
            console.log(el, index)
            if(el.id === data.id){
                //update
                console.log()

            }else{
                //push
                arr.push(data)
            }
        })
    }
    setCart(arr);
  };

  return (
    <>
      {productList &&
        productList.map((item, index) => (
          <Product key={index} addItemToCart={setCartCount} product={item} />
        ))}
    </>
  );
};

export default Products;

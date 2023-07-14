import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/jsondata")
      .then((response) => {
        console.log({ response });
        response.json();
      })
      .then((data) => {
        console.log({ data });
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <div id="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <div className="overlay">
              <div className="description">{product.description}</div>
            </div>
            <p className="price">{product.price}</p>
            <a className="order-button" href="../cart/indexCa.html">
              Add to Order
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const RenderProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("/jsondata")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  return (
    <div>
      <h1>Product List</h1>
      <div id="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <div className="overlay">
              <div className="description">{product.description}</div>
            </div>
            <p className="price">${product.price}</p>
            <a className="order-button" href="../cart/indexCa.html">
              Add to Order
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderProducts;

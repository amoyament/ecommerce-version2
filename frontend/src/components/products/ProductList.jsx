import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ productsApi }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(productsApi)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [productsApi]);

  useEffect(() => {
    if (sortOrder === "lowToHigh") {
      setFilteredProducts([...products].sort((a, b) => a.price - b.price));
    } else if (sortOrder === "highToLow") {
      setFilteredProducts([...products].sort((a, b) => b.price - a.price));
    } else {
      setFilteredProducts([...products]); // Reset filteredProducts to all products
    }
  }, [sortOrder, products]);

  const handleMouseOver = (event) => {
    const product = event.currentTarget;
    const overlay = product.querySelector(".overlay");
    const image = product.querySelector("img");
    overlay.style.opacity = "1";
    image.style.filter = "brightness(0.3)";
  };

  const handleMouseOut = (event) => {
    const product = event.currentTarget;
    const overlay = product.querySelector(".overlay");
    const image = product.querySelector("img");
    overlay.style.opacity = "0";
    image.style.filter = "brightness(1)";
  };

  const handleClick = (event) => {
    const overlay = event.target.parentNode.querySelector(".overlay");
    const image = event.target;
    overlay.style.opacity = "1";
    image.style.filter = "brightness(0.3)";
  };

  const handleSortChange = (event) => {
    const selectedSortOrder = event.target.value;
    setSortOrder(selectedSortOrder);
  };

  return (
    <div>
      <div className="sort-controls">
        <label htmlFor="sort-order">Sort by:</label>
        <select id="sort-order" value={sortOrder} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div id="products">
        {filteredProducts.map((product) => (
          <div
            className="product"
            key={product.id}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          >
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <div className="overlay">
              <div className="description">{product.description}</div>
            </div>
            <p className="price">${product.price}.00</p>
            <Link to="/cart" className="order-button">
              Add to Order
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// Import needed components and css
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ productsApi }) => {
  // State to store list of products
  const [products, setProducts] = useState([]);
  // State to store sort order
  const [sortOrder, setSortOrder] = useState(null);
  // State to store filtered list of products
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch list of products from API
  useEffect(() => {
    fetch(productsApi)
      .then((response) => response.json())
      .then((data) => {
        // Set products and filtered products
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, [productsApi]); // Re-run effect if productsApi changes

  // Sort products if sortOrder changes
  useEffect(() => {
    if (sortOrder === "lowToHigh") {
      // Sort low to high
      setFilteredProducts([...products].sort((a, b) => a.price - b.price));
    } else if (sortOrder === "highToLow") {
      // Sort high to low
      setFilteredProducts([...products].sort((a, b) => b.price - a.price));
    } else {
      // Default to unsorted
      setFilteredProducts([...products]);
    }
  }, [sortOrder, products]);

  // Mouse over handler
  const handleMouseOver = (event) => {
    // Get product element
    const product = event.currentTarget;
    // Get overlay
    const overlay = product.querySelector(".overlay");
    // Get image
    const image = product.querySelector("img");
    // Show overlay
    overlay.style.opacity = "1";
    // Darken image
    image.style.filter = "brightness(0.3)";
  };

  // Mouse out handler
  const handleMouseOut = (event) => {
    // Get product element
    const product = event.currentTarget;
    // Get overlay
    const overlay = product.querySelector(".overlay");
    // Get image
    const image = product.querySelector("img");
    // Hide overlay
    overlay.style.opacity = "0";
    // Restore image
    image.style.filter = "brightness(1)";
  };

  // Click handler
  const handleClick = (event) => {
    // Get overlay
    const overlay = event.target.parentNode.querySelector(".overlay");
    // Get image
    const image = event.target;
    // Show overlay
    overlay.style.opacity = "1";
    // Darken image
    image.style.filter = "brightness(0.3)";
  };

  // Sort change handler
  const handleSortChange = (event) => {
    // Get selected value
    const selectedSortOrder = event.target.value;
    // Update state
    setSortOrder(selectedSortOrder);
  };

  return (
    <div>
      {/* Sort controls */}
      <div className="sort-controls">
        <label htmlFor="sort-order">Sort by:</label>
        <select id="sort-order" value={sortOrder} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      {/* List products */}
      <div id="products">
        {filteredProducts.map((product) => (
          <div
            className="product"
            key={product.id}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          >
            {/* Product name */}
            <h2>{product.name}</h2>
            {/* Product image */}
            <img src={product.image} alt={product.name} />
            {/* Overlay with description */}
            <div className="overlay">
              <div className="description">{product.description}</div>
            </div>
            {/* Product price */}
            <p className="price">${product.price}.00</p>
            {/* Add to order button */}
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

// Import react and components
import React, { useState, useEffect } from "react";
import StyleSection from "./ModelStyle.jsx";
import ProductList from "./ProductList.jsx";

const Products = () => {
  // State to store selected model
  const [selectedModel, setSelectedModel] = useState(null);
  // State to store products API url
  const [productsApi, setProductsApi] = useState("http://127.0.0.1:5000/allproducts");
  // Update products API when model changes
  useEffect(() => {
    if (selectedModel) {
      setProductsApi(`http://127.0.0.1:5000/${selectedModel.toLowerCase()}products`);
    } else {
      setProductsApi("http://127.0.0.1:5000/allproducts");
    }
  }, [selectedModel]);
  // Handler to update selected model
  const handleModelClick = (model) => {
    setSelectedModel(model);
  };

  return (
    <div>
      {/* // Render model section */}
      <StyleSection onModelClick={handleModelClick} />
      {/* // Render products   */}
      <ProductList productsApi={productsApi} />
    </div>
  );
};

export default Products;

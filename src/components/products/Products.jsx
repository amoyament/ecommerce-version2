// //This will be your homepage!!
// //type rafce and it will build basic structre of your component
// import React from "react";
// import StyleSection from "./ModelStyle.jsx";
// // import ProductComponent from "./TestProduct.jsx";
// import ProductList from "./ProductList.jsx";

// const Products = () => {
//   return (
//     <div>
//       <StyleSection />
//       {/* <RenderProducts /> */}
//       {/* <ProductComponent /> */}
//       <ProductList />
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import StyleSection from "./ModelStyle.jsx";
import ProductList from "./ProductList.jsx";

const Products = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [productsApi, setProductsApi] = useState("http://127.0.0.1:5000/allproducts");

  useEffect(() => {
    if (selectedModel) {
      setProductsApi(`http://127.0.0.1:5000/${selectedModel.toLowerCase()}products`);
    } else {
      setProductsApi("http://127.0.0.1:5000/allproducts");
    }
  }, [selectedModel]);

  const handleModelClick = (model) => {
    setSelectedModel(model);
  };

  return (
    <div>
      <StyleSection onModelClick={handleModelClick} />
      <ProductList productsApi={productsApi} />
    </div>
  );
};

export default Products;

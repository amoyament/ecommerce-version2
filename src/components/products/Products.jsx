//This will be your homepage!!
//type rafce and it will build basic structre of your component
import React from "react";
import StyleSection from "./ModelStyle.jsx";
// import ProductComponent from "./TestProduct.jsx";
import ProductList from "./ProductList.jsx";

const Products = () => {
  return (
    <div>
      <StyleSection />
      {/* <RenderProducts /> */}
      {/* <ProductComponent /> */}
      <ProductList />
    </div>
  );
};

export default Products;

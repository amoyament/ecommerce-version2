//This will be your homepage!!
//type rafce and it will build basic structre of your component
import React from "react";
// import ModelStyle from "./ModelStyle.jsx";
import StyleSection from "./ModelStyle.jsx";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div>
      <StyleSection className={styles.background} />
    </div>
  );
};

export default Products;

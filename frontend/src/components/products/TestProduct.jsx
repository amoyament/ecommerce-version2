import React, { useEffect, useState } from "react";

function ProductComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/jsondata")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductComponent;

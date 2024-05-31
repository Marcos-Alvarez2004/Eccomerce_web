import React, { useState, useEffect } from "react";
import productServices from "../services/productServices";

const MyProducts = () => {
  const [products, setProducts] = useState({});

  const fetchProducts = async () => {
    setProducts(await productServices.getProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);

  return (
    <div>
      <h1>Products</h1>
      {products.data != undefined && products.data.data.length > 0 && (
        <section className="flex justify-center items-center gap-8">
          {products.data.data.map((product) => (
            <div className="flex flex-col justify-between items-center border border-white">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h4>$ {product.price}</h4>
              <img
                src={"http://localhost:4000/api/uploadProduct/" + product.image}
              />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default MyProducts;

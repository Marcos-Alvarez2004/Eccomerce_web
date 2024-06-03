// DEPENDENCIAS
import React, { useState, useEffect } from "react";
// ARCHIVOS
import productServices from "../services/productServices";
import Navbar from "../components/Navbar";
import UpdateProduct from "../components/UpdateProduct";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MyProducts = () => {
  // View Product
  const [products, setProducts] = useState({});
  // Fetch Product
  const fetchProducts = async () => {
    setProducts(await productServices.getProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // Delete Product
  const deleteProduct = async (id, e) => {
    const res = await productServices.deleteProduct(id);
    if (res.data.success == true) {
      window.location.reload();
      document.getElementById(id).remove(e);
    } else {
      alert(res.data.msg);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Products</h1>
        {products.data != undefined && products.data.data.length > 0 && (
          <section className="grid items-center grid-cols-3 h-62 w-62 gap-8">
            {products.data.data.map((product) => (
              <div className="flex flex-col justify-between items-center border border-white">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>$ {product.price}</h4>
                <div>
                  <button
                    className="bg-red-800"
                    id={product._id}
                    onClick={(e) => deleteProduct(product._id, e)}
                  >
                    Borrar
                  </button>
                </div>
                <div>
                  <UpdateProduct
                    id={product._id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                  />
                </div>
                <img
                  src={
                    "http://localhost:4000/api/uploadProduct/" + product.image
                  }
                />
              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default MyProducts;

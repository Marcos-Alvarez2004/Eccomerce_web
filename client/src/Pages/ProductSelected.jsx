import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";

const ProductSelected = ({ products }) => {
  const { id } = useParams();

  const product = products.find((e) => e.id === parseInt(id));

  if (!product) {
    return <p>No se encontro elemento</p>;
  }
  return (
    <>
      <Navbar />
      <Link to={"/products"}>Volver a productos</Link>
      <section>
        {product.name} - {product.desc} - $ {product.price}
        <div>
          <img src={product.img} alt={product.name} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductSelected;

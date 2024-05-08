// REACT
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateProduct = () => {
  // UseNavigate
  const navigate = useNavigate();
  // UseState
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    productImage: null,
  });
  // HandleChange
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "productImage" ? files[0] : value,
    });
  };
  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product_form = new FormData();

      for (var key in formData) {
        product_form.append(key, formData[key]);
      }
      // FETCH
      const res = await fetch("http://localhost:4000/product/add-product", {
        method: "POST",
        body: product_form,
      });

      if (res.ok) {
        navigate("/products");
      }
    } catch (err) {
      console.log("La creacion del producto salio mal!", err.message);
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center flex-col gap-8 h-screen">
        <h1 className="text-4xl">CREA TU ARTICULO</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* TITULO */}
          <input
            type="text"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Titulo"
          />
          {/* DESCRIPCION */}
          <textarea
            type="text"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descripcion"
          />
          {/* PRECIO */}
          <input
            type="number"
            className="rounded border-2 border-zinc-400 p-1 bg-transparent"
            required
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Precio $"
          />

          {/* SUBIDA DE FOTO DEL PRODCUTO */}
          <input
            type="file"
            id="image"
            name="productImage"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="image"
            className="flex flex-col justify-center gap-2 cursor-pointer text-white text-sm"
          >
            <div className="bg-red-500 p-2 text-center rounded">
              AGREGAR SU FOTO DEL PRODUCTO
            </div>
          </label>
          {formData.productImage && (
            <div className="mx-auto bg-white border-2 border-white w-40 h-40">
              <img
                src={URL.createObjectURL(formData.productImage)}
                alt="Agregar foto"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <button type="submit" className="bg-indigo-500 p-2 rounded">
            CREAR ARTICULO
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default CreateProduct;

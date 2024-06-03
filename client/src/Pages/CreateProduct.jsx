import React, { useState } from "react";
import productServices from "../services/productServices";
import Navbar from "../components/Navbar";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    const res = await productServices.create(formData);
    if (res.data.success == true) {
      setMessage("Product created successfully!");
    } else {
      setMessage("Product created failed!");
    }
    setTimeout(function () {
      setMessage("");
    }, 2000);
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Create Product</h2>
        <form
          className="flex flex-col gap-8 bg-slate-800 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            required
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-500"
          />
          <input
            type="text"
            name="description"
            placeholder="Enter Desc"
            required
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-500"
          />
          <input
            type="number"
            name="price"
            required
            onChange={(e) => setPrice(e.target.value)}
            className="bg-slate-500"
          />
          <input
            type="file"
            name="image"
            required
            onChange={(e) => setImage(e.target.files[0])}
            className="bg-slate-500"
          />
          <button className="bg-red-500">Submit</button>
        </form>
        <p>{message}</p>
      </div>
    </>
  );
};

export default CreateProduct;

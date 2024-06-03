import React, { useState } from "react";
import productServices from "../services/productServices";
import { Modal, Button } from "react-bootstrap";

const UpdateProduct = (props) => {
  const [isShow, invokeModal] = useState(false);

  const initModal = () => {
    return invokeModal(!isShow);
  };
  // Update Product
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [selectedImage, setSelectedImage] = useState("");
  const [id, setId] = useState(props.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("id", id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    if (selectedImage != "" && selectedImage.length != 0) {
      formData.append("image", selectedImage);
    }

    const res = await productServices.update(formData);

    if (res.data.success == true) {
      alert(res.data.msg);
      window.location.reload();
    } else {
      alert(res.data.msg);
    }
    initModal();
  };

  return (
    <>
      <Button variant="success" onClick={initModal}>
        Edit
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title className="bg-slate-500">Update Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            {/* Title */}
            <input
              type="text"
              name="title"
              placeholder="Enter Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-slate-500"
              required
            />
            <br />
            <br />
            {/* Desc */}
            <input
              className="bg-slate-500"
              type="text"
              name="description"
              placeholder="Enter desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <br />
            <br />
            {/* Price */}
            <input
              className="bg-slate-500"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <br />
            <br />
            {/* Image */}
            <input
              className="bg-slate-500"
              type="file"
              name="image"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <br />
            <br />
            <button type="submit">Update</button>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="dark">
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default UpdateProduct;

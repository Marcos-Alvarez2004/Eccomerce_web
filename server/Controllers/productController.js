import Product from "../Models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename,
    });

    const productData = await product.save();

    res
      .status(200)
      .send({ success: true, msg: "New Product", data: productData });
  } catch (error) {
    req.status(400).send({ success: false, msg: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const productos = await Product.find({});
    res
      .status(200)
      .send({ success: true, msg: "Producto Data", data: productos });
  } catch (error) {
    req.status(400).send({ success: false, msg: error.message });
  }
};

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

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.deleteOne({ _id: id });
    res.status(200).send({ success: true, msg: "Product deleted" });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    if (req.file !== undefined) {
      const id = req.body.id;
      const title = req.body.title;
      const description = req.body.description;
      const price = req.body.price;
      const filename = req.file.filename;

      await Product.findByIdAndUpdate(
        { _id: id },
        {
          title: title,
          description: description,
          price: price,
          image: filename,
        }
      );
      res.status(200).send({ success: true, msg: "Product Updated" });
    } else {
      const id = req.body.id;
      const title = req.body.title;
      const description = req.body.description;
      const price = req.body.price;

      await Product.findByIdAndUpdate(
        { _id: id },
        {
          title: title,
          description: description,
          price: price,
        }
      );
      res.status(200).send({ success: true, msg: "Product Updated" });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

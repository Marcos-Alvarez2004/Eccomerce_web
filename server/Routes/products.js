// ARCHIVO
import Products from "../Models/Products.js";
// DEPENDENCIAS
import express from "express";
import multer from "multer";
// ROUTER
const router = express.Router();
// * CONFIGURACION MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploadsProduct/"); // ARCHIVOS ALMACENADOS EN LA CARPETA publicUpload
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // NOMBRE ORIGINAL DEL ARCHIVO
  },
});
// VARIABLE UPLOAD
const upload = multer({ storage });
// ! AÑADIR PRODUCTO
router.post("/add-product", upload.single("productImage"), async (req, res) => {
  try {
    // TOMAR INFORMACION
    const { name, description, price } = req.body;
    // IMAGEN DEL PRODUCTO
    const productImage = req.file;
    // SI LA IMAGEN ESTA CORRECTAMENTE SUBIDA
    if (!productImage) {
      return res.status(400).send("No se subio ninguna imagen!");
    }
    // RUTA DE LA IMAGEN
    const productImagePath = productImage.path;
    // CREAR PRODUCTO
    const newProduct = new Products({
      name,
      description,
      price,
      productImagePath,
    });
    // GUARDAR PRODUCTO
    await newProduct.save();
    // ENVIAR MENSAJE PRODUCTO GUARDADO
    res
      .status(200)
      .json({ message: "Producto agregado con exito!", product: newProduct });
  } catch (err) {
    res.status(500).json({
      message: "Ocurrio un error al agregar el producto!",
      error: err.message,
    });
  }
});

// ! OBTENER UN PRODUCTO POR ID
router.get("/:id", async (req, res) => {
  const product = await Products.findById(req.params.id);
  res.json(product);
});

export default router;

// ARCHIVO
import Products from "../Models/Products.js";
// DEPENDENCIAS
import express from "express";
// ROUTER
const router = express.Router();

// AÑADIR PRODUCTO
router.post("/add-product", async (req, res) => {
  try {
    // TOMAR INFORMACION
    const { name, description, price } = req.body;
    // CREAR PRODUCTO
    const newProduct = new Products({
      name,
      description,
      price,
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

export default router;

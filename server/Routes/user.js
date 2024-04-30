// VARIABLES
import User from "./User.js";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
// ROUTER
const router = express.Router();
// REGISTER
router.post("/register", async (req, res) => {
  try {
    // TOMAR INFORMACION
    const { name, email, password } = req.body;
    // CREAR USUARIO
    const newUser = new User({
      name,
      email,
      password,
    });
    // GUARDAR EL USUARIO
    await newUser.save();
    // ENVIAR MENSAJE DE USUARIO REGISTRADO
    res
      .status(200)
      .json({ message: "Usuario registrado con exito!", user: newUser });
  } catch (err) {
    res.status(500).json({
      message: "Algo salio mal!",
      error: err.message,
    });
  }
});

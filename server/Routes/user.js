// VARIABLES
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../Models/User.js";
// ROUTER
const router = express.Router();
// REGISTER
router.post("/register", async (req, res) => {
  try {
    // TOMAR INFORMACION
    const { name, email, password } = req.body;
    // SI EL USUARIO ESTA REGISTRADO
    const ususarioExistente = await User.findOne({ email });
    if (ususarioExistente) {
      return res.status(409).json({ message: "Usuario ya existente!" });
    }
    // CONTRASEÑA CODIFICADA
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    // CREAR USUARIO
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
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

export default router;

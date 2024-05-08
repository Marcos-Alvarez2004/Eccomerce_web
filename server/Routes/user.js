// DEPENDENCIAS
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
// ARCHIVOS
import User from "../Models/User.js";
// ROUTER
const router = express.Router();
// CONFIGURACION MULTER PARA ARCHIVOS UPLOAD
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // ALMACENAMIENTO DE ARCHIVOS SUBIDOS IN LA CARPETA "UPLOAD"
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // USAR EL NOMBRE ORIGINAL
  },
});
// VARIABLE UPLOAD
const upload = multer({ storage });
// REGISTER
router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    // TOMAR INFORMACION
    const { name, email, password } = req.body;
    // LA IMAGEN SUBIDA ES UNA VARIABLE DE REQ.FILE
    const profileImage = req.file;
    // SI LA IMAGEN ESTA CORRECTAMENTE SUBIDA
    if (!profileImage) {
      return res.status(400).send("No se subio ninguna imagen!");
    }
    // RUTA DE LA IMAGEN SUBIDA
    const profileImagePath = profileImage.path;
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
      profileImagePath,
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

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // TOMAR INFORMACION
    const { email, password } = req.body;
    // SI EL USUSARIO EXISTE
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(409).json({ message: "El usuario no existe!" });
    }

    // COMPARAR CONTRASEÑAS
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credentiales invalidas!" });
    }
    // GENERAR TOKEN
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    // RESPUESTA
    res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

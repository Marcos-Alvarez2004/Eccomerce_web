// VARIABLES GENERAL
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// APP VARIABLE
const app = express();
// CONFIG DOTENV
dotenv.config();
// APP USE
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// PUERTO Y SERVER INICIADO
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server iniciado en el puerto ${PORT}`);
});

// VARIABLES GENERAL
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
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
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Eccomerce_web",
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running ${PORT}`));
  })
  .catch((err) => console.log(`${err} Not running`));

// DEPENDENCIAS
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import multer from "multer";
// ARCHIVOS
import {
  createProduct,
  getProducts,
} from "../Controllers/productController.js";

const product_route = express();

product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({ extended: true }));
product_route.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      path.join(__dirname, "../public/uploadProduct"),
      function (error, success) {
        if (error) {
          console.log(error);
        }
      }
    );
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, function (error, success) {
      if (error) {
        console.log(error);
      }
    });
  },
});

const upload = multer({ storage: storage });

product_route.post("/create-product", upload.single("image"), createProduct);

product_route.get("/get-products", getProducts);

export default product_route;

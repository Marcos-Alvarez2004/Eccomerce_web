// DEPENDENCIAS
import moongose from "mongoose";

const productSchema = new moongose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = moongose.model("Products", productSchema);
export default Products;

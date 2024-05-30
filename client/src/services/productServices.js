import axios from "axios";

const urlBase = "http://localhost:4000/api";

class Product {
  create(formData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(`${urlBase}/create-product`, formData, config);
  }
  getProducts() {
    return axios.get(`${urlBase}/get-products`);
  }
}

export default new Product();

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
  deleteProduct(id) {
    return axios.get(`${urlBase}/delete-product/${id}`);
  }
  update(formData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(`${urlBase}/update-product`, formData, config);
  }
}

export default new Product();

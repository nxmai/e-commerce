import axiosClient from "./axiosClient";


const productApi = {
  getAll:  (params) => {
    const url = "https://crushy.herokuapp.com/product";
    return axiosClient.get(url, { params });
  },

  getSingleProduct: (id) => {
    const url = `https://crushy.herokuapp.com/product/${id}`;
    return axiosClient.get(url);
  },

  getBrand: () => {
      const url = "https://crushy.herokuapp.com/product/brands";
      return axiosClient.get(url);
  }
}


export default productApi;

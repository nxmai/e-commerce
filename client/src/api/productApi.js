import axiosClient from "./axiosClient";


const productApi = {
  getAll:  (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  },

  getSingleProduct: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },

  getBrand: () => {
      const url = "/product/brands";
      return axiosClient.get(url);
  }
}


export default productApi;

import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

const refreshToken = async () => {
  const {data} = await axiosClient.get("/user/refresh_token");
  localStorage.setItem("token", data.token);
  // console.log('refresh token', data.token);
}

axiosClient.interceptors.response.use(
  (response) => {
    // console.log('respones interceptor', response);

    // const {code} = response.data;
    // if(code == 401){
    //   if(response.data.msg === "Token expired"){
    //     console.log('interceptor expired');
    //   }
    // }

    // if (response && response.data) {
    //   return response.data;
    // }
    return response;
  },
  (error) =>  {
    // Handle errors
    const {status} = error.response;
    if(status == 401){
      if(error.response.data.msg === "Token expired"){
        console.log('interceptor expired');
        refreshToken();
      }
    }

    console.log('interceptor err', error.response);
    throw error;
  }
);
export default axiosClient;

import axiosClient from "./axiosClient";

export const authApi = {
    signup: (user) => {
        const url='/user/register';
        return axiosClient.post(url, {user});
    }
}
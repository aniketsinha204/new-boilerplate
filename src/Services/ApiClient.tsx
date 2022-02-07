import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

let token: string | boolean | null = false;

if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
}
const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: token ? `Bearer ${token}` : '',
    },
};
export type AxiosRequestHeaders = Record<string, Record<string, string>>;
const axiosIntance: AxiosInstance = axios.create(config);

axiosIntance.interceptors.request.use(
    async (req: AxiosRequestConfig) => req,
    (error) => error
);
axiosIntance.interceptors.response.use(
    (res) => res,
    (error) => {
        console.log(error.response);
        return error;
    }
);

export default axiosIntance;

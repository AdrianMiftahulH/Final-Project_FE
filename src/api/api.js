import axios from 'axios';

const baseURL = 'http://localhost:4000/v1'

export const api = axios.create({
    baseURL,
    withCredentials: true
});

export const apiWithTokenDashBoard = axios.create({
    baseURL,
});

apiWithTokenDashBoard.interceptors.request.use(
    async (config) => {
        const response = await api.get(`${baseURL}/auth/token`, { withCredentials: true });
        config.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
        console.log('acces',response.data.data.accessToken);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const apiWithToken = axios.create({
    baseURL,
});

apiWithToken.interceptors.request.use(
    async (config) => {
        const response = await api.get(`${baseURL}/auth/token`, { withCredentials: true });
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        console.log('acces',response.data.accessToken);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
import axios from "axios";
import { tokenService } from "../service/TokenService";



export const httpClient = axios.create({
    baseURL: "http://localhost:8080"
})



httpClient.interceptors.request.use(
    (config) => {
        const token = tokenService.get();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
)

httpClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
)

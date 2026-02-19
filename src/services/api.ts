import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-ebac.vercel.app/api/efood/restaurantes',
    timeout:1000,
});

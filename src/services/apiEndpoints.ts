import axios from "axios";

export const apiDealership_app_quote = axios.create({
    baseURL:  import.meta.env.VITE_API_ENDPOINT_URL
});
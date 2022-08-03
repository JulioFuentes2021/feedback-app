import axios from "axios";

const instance = axios.create({
    method: "POST",
    baseURL: `${import.meta.env.VITE_URL}`,
    withCredentials: true,
});

export default instance;

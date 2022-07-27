import axios from "axios";

const instance = axios.create({
    method: "POST",
    baseURL: "http://localhost:5000/api/v1/",
    withCredentials: true,
});

export default instance;

import axios from "axios";

const instance = axios.create({
    method: "PATCH",
    baseURL: `${import.meta.env.VITE_URL}/feedback/addUpvote`,
});

export default instance;

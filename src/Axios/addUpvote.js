import axios from "axios";

const instance = axios.create({
    method: "PATCH",
    baseURL: "http://localhost:5000/feedback/addUpvote",
});

export default instance;

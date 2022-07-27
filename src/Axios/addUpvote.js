import axios from "axios";

const instance = axios.create({
    method: "PATCH",
    baseURL: "http://localhost:5000/api/v1/feedback/addUpvote",
});

export default instance;

import axios from "axios";

const instance = axios.create({
	method: "POST",
	baseURL: "http://localhost:8000/feedback/",
});

export default instance;

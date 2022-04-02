import axios from "axios";

const instance = axios.create({
	method: "POST",
	baseURL: "http://localhost:5000/feedback/",
});

export default instance;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/index";
import store from "@redux/store";
import { Provider } from "react-redux";
// import Context from "./context/context";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

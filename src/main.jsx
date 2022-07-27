import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/index";
import store from "@redux/store";
import { Provider } from "react-redux";
// import Context from "./context/context";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>,
	</React.StrictMode>,
	document.getElementById("root")
);

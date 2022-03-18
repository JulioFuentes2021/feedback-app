import React from "react";
import "./LOADING.css";

const LOADING = () => {
	return (
		<div className="flex justify-center">
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LOADING;

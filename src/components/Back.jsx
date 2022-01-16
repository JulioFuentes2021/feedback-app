import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const Back = () => {
	return (
		<div className="flex items-center">
			<span>
				<FaChevronLeft />
			</span>
			<span className="mx-4">Go Back</span>
		</div>
	);
};

export default Back;

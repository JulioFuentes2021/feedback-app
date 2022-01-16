import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Back = () => {
	return (
		<Link to="/feedback-app/">
			<div className="flex items-center my-5">
				<span className="cursor-pointer">
					<FaChevronLeft />
				</span>
				<span className="mx-4 cursor-pointer">Go Back</span>
			</div>
		</Link>
	);
};

export default Back;

import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const GoBack = () => {
	return (
		<div className="flex justify-between items-center ">
			<div className="flex items-center">
				<span>
					<FaChevronLeft />
				</span>
				<span className="mx-4">Go Back</span>
			</div>
			<div>
				<button
					type="button"
					className="p-3 w-48 text-white rounded-xl hover:bg-blue-600 outline-none bg-blue-700"
				>
					Edit Feedback
				</button>
			</div>
		</div>
	);
};

export default GoBack;

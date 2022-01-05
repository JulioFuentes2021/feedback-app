import React from "react";

const Buttons = props => {
	return (
		<button
			className={`rounded-xl mb-2 mx-2 bg-gray-200 p-2 ${props.width} font-semibold text-blue-600`}
		>
			{props.content}
		</button>
	);
};

export default Buttons;

import React from "react";

const UtilityButtons = (width, bg, bgHover, content) => {
	return (
		<button
			type="button"
			className={`p-3 ${
				width || "w-48"
			} rounded-xl hover:${bgHover} outline-none ${bg | "bg-blue-500"}`}
		>
			{content | "Holacss"}
		</button>
	);
};

export default UtilityButtons;

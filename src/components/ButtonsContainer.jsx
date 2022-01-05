import React from "react";
import Button from "./Buttons";

const ButtonsContainer = () => {
	return (
		<div className="w-72 h-48 p-3">
			<div>
				<Button content="All" width="w-12" />
				<Button content="UI" width="w-12" />
				<Button content="UX" width="w-12" />
			</div>
			<div>
				<Button content="Enhacement" />
				<Button content="Bug" width="w-16" />
			</div>
			<div>
				<Button content="Feature" />
			</div>
		</div>
	);
};

export default ButtonsContainer;

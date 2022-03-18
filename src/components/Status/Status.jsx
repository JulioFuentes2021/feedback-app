import React from "react";
import TitleSquare from "./TitleSquare";
import Roadmap from "./Roadmap";
import ButtonsContainer from "./ButtonsContainer";

const Status = () => {
	return (
		<div className="gridForButtonsContainer my-8 xl:my-0 xl:flex xl:flex-col xl:items-center">
			<TitleSquare />
			<Roadmap />
			<ButtonsContainer />
		</div>
	);
};

export default Status;

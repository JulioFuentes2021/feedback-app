import React from "react";
import FirstFeedbackImage from "../images/AddFeedback.svg";

const FirstFeedback = () => {
	return (
		<article className="flex flex-col items-center">
			<span className="text-2xl sm:text-4xl lg:text-5xl my-5">
				You can add your first feedback
			</span>
			<img src={FirstFeedbackImage} alt="" className="w-96 h-96" />
		</article>
	);
};

export default FirstFeedback;

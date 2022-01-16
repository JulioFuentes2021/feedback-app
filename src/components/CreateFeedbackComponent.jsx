import React from "react";
import Back from "./Back";
import CreateFeedback from "./CreateNewFeedback";

const CreateFeedbackComponent = () => {
	return (
		<div>
			<div className="bg-red-500">
				<Back />
				<CreateFeedback />
			</div>
		</div>
	);
};

export default CreateFeedbackComponent;

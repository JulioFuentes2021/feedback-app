import React from "react";
import MenuMobile from "@Header/MenuMobile";
import AddFeedback from "@AddFeedbackBar/AddFeedback";
import AllFeedbacks from "@FeedbackCard/AllFeedbacks";
import Status from "@Status/Status";

const Index = () => {



	return (
		<div className="xl:grid xl:grid-cols-4 justify-between lg:p-6 gap-5">
			<div className="col-span-1">
				<Status />
				<MenuMobile />
			</div>
			<div className="col-span-3">
				<AddFeedback />
				<article>
					<AllFeedbacks />
				</article>
			</div>
		</div>
	);
};

export default Index;

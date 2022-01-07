import React from "react";
import MenuMobile from "../components/MenuMobile";
import AddFeedback from "../components/AddFeedback";
import FeedbackCard from "../components/FeedbackCard";
import Status from "../components/Status";

const Index = () => {
	return (
		<div className="xl:grid xl:grid-cols-4 justify-between lg:p-6 gap-5">
			<div className="col-span-1">
				<Status />
				<MenuMobile />
			</div>
			<div className="col-span-3">
				<AddFeedback />
				<div className="">
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
				</div>
			</div>
		</div>
	);
};

export default Index;

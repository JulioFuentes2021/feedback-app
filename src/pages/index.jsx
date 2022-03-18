import React from "react";
import MenuMobile from "../components/MenuMobile";
import AddFeedback from "../components/AddFeedback";
import AllFeedbacks from "../components/AllFeedbacks";
import Status from "../components/Status/Status";

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

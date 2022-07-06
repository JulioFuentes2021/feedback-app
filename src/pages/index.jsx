import React, { useEffect, useContext } from "react";
import MenuMobile from "@Header/MenuMobile";
import AddFeedback from "@AddFeedbackBar/AddFeedback";
import AllFeedbacks from "@FeedbackCard/AllFeedbacks";
import Status from "@Status/Status";
import useSocket from '../customHooks/socket';

const Index = () => {
	const [socket, setConnection] = useSocket();

	if (!socket) {
		setConnection();
	}

	return (
		<div className="xl:grid xl:grid-cols-4 justify-between lg:p-6 gap-5">
			<div className="col-span-1">
				<Status />
				<MenuMobile />
			</div>
			<div className="col-span-3">
				<AddFeedback socket={socket} />
				<article>
					<AllFeedbacks />
				</article>
			</div>
		</div>
	);
};

export default Index;

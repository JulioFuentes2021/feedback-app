import React from "react";
import FeedbackCard from "./FeedbackCard";
import { useEffect } from "react";
import FirstFeedback from "./FirstFeedback";
import useSocket from "../../customHooks/socket";
import useAllFeedback from "../../customHooks/allFeedbacks";

const AllFeedbacks = () => {
	let isRendered = false;
	const [socket] = useSocket();
	const [data, getFeedbacks] = useAllFeedback();

	useEffect(() => {
		if (socket) {
			isRendered = true;
			if (!data.length) getFeedbacks();

			socket.on("getFeed", (data) => {
				console.log('getFeed')
				// setAllFeedbacks(data)
				getFeedbacks()
			})
			socket.on("update", (data) => {
				console.log('update')
				// setAllFeedbacks(data);
				getFeedbacks()
			})

			socket.on("updateComments", () => {
				getFeedbacks();
			})

			return () => {
				socket.off('update');
				socket.off('getFeed');
				socket.off('get');
				socket.off('updateComments');
			}

		}
	}, [socket]);


	return (
		<div>
			{data.length ? (
				data.map(card => (
					<FeedbackCard
						title={card.title}
						feature={card.feature}
						description={card.description}
						upvotes={card.upvotes}
						users={card.test}
						comments={card.commentsLength}
						key={card._id}
						id={card._id}
					/>
				))
			) : (
				<FirstFeedback />
			)}
		</div>
	);
};

export default AllFeedbacks;

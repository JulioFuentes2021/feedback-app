import React, { useContext } from "react";
import FeedbackCard from "./FeedbackCard";
import { useEffect } from "react";
import FirstFeedback from "./FirstFeedback";
import useSocket from "../../customHooks/socket";
import useAllFeedback from "../../customHooks/allFeedbacks";
import { FeedbackContext } from "../../context/context";

const AllFeedbacks = () => {
	let isRendered = false;
	// const [socket] = useSocket();
	const { sortBy, socket } = useContext(FeedbackContext);
	const [data, getFeedbacks, updateData] = useAllFeedback();

	useEffect(() => {
		if (socket) {
			isRendered = true;
			if (!data.length) getFeedbacks(sortBy);

			socket.on("update", () => {
				getFeedbacks(sortBy)
			})

			socket.on("updateComments", () => {
				getFeedbacks(sortBy);
			})

			return () => {
				socket.off('update');
				socket.off('getFeed');
				socket.off('get');
				socket.off('updateComments');
			}

		}
	}, [socket, sortBy]);


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

import React, { useContext } from "react";
import axios from "axios";
import FeedbackCard from "./FeedbackCard";
import { useEffect, useState } from "react";
import FirstFeedback from "./FirstFeedback";
import { FeedbackContext } from "../../context/context";

const AllFeedbacks = () => {
	const [allFeedbacks, setAllFeedbacks] = useState([]);
	let isRendered = false;
	const { socket } = useContext(FeedbackContext)

	const getFeedbacks = async () => {
		try {
			const data = await axios.get("http://localhost:5000/feedback/all");
			setAllFeedbacks(data.data);

		} catch (error) {
			console.log(error)
		}
	};

	useEffect(() => {
		if (socket) {
			isRendered = true;
			getFeedbacks();

			socket.emit("get")

			socket.on("getFeed", (data) => {
				setAllFeedbacks(data)
			})
			socket.on("update", (data) => {
				setAllFeedbacks(data)
			})

			return () => {
				socket.off('update');
				socket.off('getFeed');
				socket.off('get');
			}

		}
	}, [socket]);


	return (
		<div>
			{allFeedbacks.length ? (
				allFeedbacks.map(card => (
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

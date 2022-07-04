import React, { useContext } from "react";
import axios from "axios";
import FeedbackCard from "./FeedbackCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "@redux/slices/loading";
import { setError } from "@redux/slices/error";
import LOADING from "@Utilities/LOADING";
import Error from "./Error";
import FirstFeedback from "./FirstFeedback";
import { sockets } from "../../socket/index";
import { testingBackendEmitter } from "../../socket/index";
import { FeedbackContext } from "../../context/context";

const AllFeedbacks = () => {
	// const dispatch = useDispatch();
	// const loading = useSelector(state => state.loading.value);
	// const error = useSelector(state => state.error.value);
	const [allFeedbacks, setAllFeedbacks] = useState([]);
	// con [isRendered, setIsRendered] = useState(false)
	let isRendered = false;
	// const sockets = useSelector((state) => state.sockets.value)
	const { socket } = useContext(FeedbackContext)

	const getFeedbacks = async () => {
		// dispatch(setLoading(!loading));
		try {
			const data = await axios.get("http://localhost:5000/feedback/all");
			setAllFeedbacks(data.data);
			console.log(data)

		} catch (error) {
			// dispatch(setError(!error));
			console.log(error)
		}
		// dispatch(setLoading(!loading));
	};

	useEffect(() => {
		if (socket) {
			isRendered = true;
			getFeedbacks();
			console.log('SOCKET', socket)

			socket.emit("get")

			socket.on("getFeed", (data) => {
				setAllFeedbacks(data)
			})

			// socket.on("get", (data) => {
			// 	console.log(data)
			// 	console.log("Socket get executed")
			// 	// setAllFeedbacks(data)
			// })
			// if (!allFeedbacks.length) getFeedbacks();
			// testingBackendEmitter()
			socket.on("update", (data) => {
				console.log("Feedbacks updated", data)
				setAllFeedbacks(data)
			})
			console.log(socket)

			return () => {
				socket.off('update');
				socket.off('getFeed');
				socket.off('get');
			}

		}
	}, [socket]);

	// if (!allFeedbacks.length) {
	// 	return "Un mensaje para indicar que no hay feedbacks disponibles";
	// }

	// sockets.on("update", (data) => {
	// 	console.log("Feedbacks updated", data)
	// 	setAllFeedbacks(data)
	// })

	// if (error) {
	// 	return <Error />;
	// }

	// if (loading) {
	// 	return <LOADING />;
	// }

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

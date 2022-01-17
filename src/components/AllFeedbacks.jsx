import React from "react";
import axios from "axios";
import FeedbackCard from "./FeedbackCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../redux/slices/loading";
import { setError } from "../redux/slices/error";
import LOADING from "./LOADING";

const AllFeedbacks = () => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.loading.value);
	const error = useSelector(state => state.error.value);
	const [allFeedbacks, setAllFeedbacks] = useState([]);

	const getFeedbacks = async () => {
		dispatch(setLoading());
		try {
			const data = await axios.get("http://localhost:8000/feedback/all");
			setAllFeedbacks(data.data);
		} catch (error) {
			dispatch(setError());
		}
		dispatch(setLoading());
	};

	useEffect(() => {
		getFeedbacks();
	}, []);

	// if (!allFeedbacks.length) {
	// 	return "Un mensaje para indicar que no hay feedbacks disponibles";
	// }

	if (error) {
		return "Ha ocurrido un error...";
	}

	if (loading) {
		return <LOADING />;
	}

	return (
		<div>
			{allFeedbacks.length ? (
				allFeedbacks.map(card => <FeedbackCard key={card._id} id={card._id} />)
			) : (
				<h1>Un mensaje para indicar que no hay feedbacks disponibles</h1>
			)}
		</div>
	);
};

export default AllFeedbacks;

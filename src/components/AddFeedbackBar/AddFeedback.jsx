import React, { useEffect, useState, useRef, useContext } from "react";
import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "@redux/slices/test";
import { FeedbackContext } from "../../context/context";
import useSocket from "../../customHooks/socket";
// const 

const AddFeedback = () => {
	const dispatch = useDispatch();
	// const [suggestions, setSuggestions] = useState();
	const sortOptions = useRef(null);
	const { setSortBy, socket, suggestions } = useContext(FeedbackContext);
	// const { socket } = useSocket();

	// useEffect(() => {
	// 	console.log(socket)
	// 	if (socket) {
	// 		console.log('Suggestions')
	// 		socket.on("suggestions", (data) => {
	// 			console.log(data)
	// 			setSuggestions(data);
	// 		})

	// 		return () => {
	// 			socket.off("suggestions")
	// 		}
	// 	}
	// 	// }, [socket])
	// }, [socket])

	const changeFeedbackSort = () => {
		console.log(sortOptions.current.value)
		setSortBy(sortOptions.current.value)
	}

	return (
		<div className="text-xl p-2 text-white flex flex-col sm:flex-row items-center justify-between  bg-gray-800">
			<article className="flex my-8">
				<div className=" hidden md:flex">
					<section className="">
						<FaLightbulb />
					</section>
					<section className="font-bold mx-4">{suggestions} Suggestions</section>
				</div>
				<div className="mr-4">
					<span className="text-gray-400">Sort by : </span>
					<select
						// onClick={() => dispatch(increment())}
						name="sort"
						id="options"
						ref={sortOptions}
						// value={sortOptions?.current?.value}
						onChange={changeFeedbackSort}
						className="bg-gray-800 font-semibold outline-none"
					>
						<option value="/all">None</option>
						<option value="/upvotes/-1">Most Upvotes</option>
						<option value="/upvotes/1">Less Upvotes</option>
						<option value="/comments/-1">Most Comments</option>
						<option value="/comments/1">Less Comments</option>
					</select>
				</div>
			</article>
			<Link to="/feedback-app/add">
				<button
					type="button"
					className="p-3 w-48 rounded-xl hover:bg-purple-600 outline-none bg-purple-700"
				>
					+ Add Feedback
				</button>
			</Link>
		</div>
	);
};

export default AddFeedback;

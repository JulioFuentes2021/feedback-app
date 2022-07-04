import React, { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "@redux/slices/test";

const AddFeedback = ({ socket }) => {
	const dispatch = useDispatch();
	const [suggestions, setSuggestions] = useState();

	useEffect(() => {

		if (socket) {
			socket.on("suggestions", (data) => {
				setSuggestions(data);
			})

			return () => {
				socket.off("suggestions")
			}
		}
	}, [socket])

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
						onClick={() => dispatch(increment())}
						name="sort"
						id="options"
						className="bg-gray-800 font-semibold outline-none"
					>
						<option value="MostUpvotes">Most Upvotes</option>
						<option value="LessUpvotes">Less Upvotes</option>
						<option value="LessUpvotes">Most Comments</option>
						<option value="LessUpvotes">Less Comments</option>
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
